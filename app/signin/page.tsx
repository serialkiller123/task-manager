"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    } else {
      router.push("/tasks");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
      <div className="w-full max-w-md bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Sign In
        </h1>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white bg-opacity-20 border-0 focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-white bg-opacity-20 border-0 focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <p className="mt-4 text-center text-white">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-300 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
