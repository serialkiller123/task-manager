"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { TaskCard } from "../components/TaskCard";
import { WeatherWidget } from "../components/WeatherWidget";
import JokeWidget from "../components/JokeWidget";
import RandomFactWidget from "../components/RandomFactWidget";
import TechNewsWidget from "../components/fetchStories";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

export default function TasksPage() {
  const { data: session, status } = useSession();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    } else if (status === "authenticated") {
      fetchTasks();
    }
  }, [status, router]);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/tasks");
      if (!res.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      setError(err as Error["message"]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      if (!res.ok) {
        throw new Error("Failed to create task");
      }
      const createdTask = await res.json();
      setTasks([...tasks, createdTask]);
      setNewTask({ title: "", description: "" });
    } catch (err) {
      setError(err as Error["message"]);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, { method: "DELETE" });
      if (!res.ok) {
        throw new Error("Failed to delete task");
      }
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      setError(err as Error["message"]);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) {
        throw new Error("Failed to update task status");
      }
      const updatedTask = await res.json();
      setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    } catch (err) {
      setError(err as Error["message"]);
    }
  };

  if (status === "loading" || isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!session) {
    return <div className="text-center">Please sign in to view tasks.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white text-center">
        Task Manager
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Task Form and List Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Create New Task Form */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Create New Task
            </h2>
            <form onSubmit={handleCreateTask} className="space-y-4">
              <Input
                label="Title"
                placeholder="Enter task title"
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
                required
                className="bg-white bg-opacity-20 border-0 focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
              />
              <Input
                label="Description"
                placeholder="Enter task description"
                value={newTask.description}
                onChange={(e) =>
                  setNewTask({ ...newTask, description: e.target.value })
                }
                className="bg-white bg-opacity-20 border-0 focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
              />
              <Button type="submit" className="w-full mt-4">
                Create Task
              </Button>
            </form>
          </div>

          {/* Task List */}
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                {...task}
                onDelete={handleDeleteTask}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </div>

        {/* Weather Widget Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <WeatherWidget />
            <TechNewsWidget />
            <JokeWidget />
            <RandomFactWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
