import { useEffect, useState } from "react";
import { Button } from "./Button";

const RandomFactWidget = () => {
  const [fact, setFact] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch fact");
      }
      const data = await res.json();
      setFact(data.text);
    } catch (err) {
      setError("Failed to load fact. Please try again later.");
      console.error("Error fetching fact:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Random Fact</h2>
      {isLoading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <p className="text-white text-wrap">{fact}</p>
      )}
      <Button
        variant="secondary"
        onClick={fetchFact}
        className="mt-4 text-gray-300 font-bold py-2 px-4 rounded"
      >
        New Fact
      </Button>
    </div>
  );
};

export default RandomFactWidget;
