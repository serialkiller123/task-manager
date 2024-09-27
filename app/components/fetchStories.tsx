import React, { useState, useEffect } from "react";
import { Button } from "./Button";

interface Story {
  id: number;
  title: string;
  url: string;
  by: string;
  time: number;
}

const TechNewsWidget: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch stories");
      }
      const storyIds = await response.json();

      const storyPromises = storyIds
        .slice(0, 5)
        .map((id: number) =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
            (res) => res.json()
          )
        );
      const fetchedStories = await Promise.all(storyPromises);
      setStories(fetchedStories);
    } catch (err) {
      setError("Failed to load news. Please try again later.");
      console.error("Error fetching news:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (time: number) => {
    const date = new Date(time * 1000);
    return date.toLocaleString();
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Tech News Headlines
      </h2>
      {isLoading ? (
        <p className="text-white">Loading news...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <ul className="space-y-4">
          {stories.map((story) => (
            <li key={story.id} className="text-white">
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 transition duration-300"
              >
                {story.title}
              </a>
              <p className="text-sm text-gray-300">
                By {story.by} | {formatTime(story.time)}
              </p>
            </li>
          ))}
        </ul>
      )}
      <Button
        variant="secondary"
        onClick={fetchStories}
        className="mt-4 text-gray-300 font-bold py-2 px-4 rounded transition duration-300"
      >
        Refresh News
      </Button>
    </div>
  );
};

export default TechNewsWidget;
