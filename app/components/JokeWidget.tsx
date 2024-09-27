import { useEffect, useState } from "react";

const JokeWidget = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await res.json();
    setJoke(data.joke || `${data.setup} - ${data.delivery}`);
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Joke of the Day
      </h2>
      <p className="text-white">{joke}</p>
    </div>
  );
};

export default JokeWidget;
