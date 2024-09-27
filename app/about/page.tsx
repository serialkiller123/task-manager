import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">About Task Manager</h1>
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6">
        <p className="text-white mb-4">
          Task Manager is a powerful and intuitive application designed to help
          you organize your tasks and boost your productivity. Our mission is to
          provide a seamless and enjoyable task management experience for
          individuals and teams alike.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Features</h2>
        <ul className="list-disc list-inside text-white mb-4">
          <li>Create and manage tasks with ease</li>
          <li>
            Organize tasks into projects - This feature is set for future
            updates
          </li>
          <li>
            Set due dates and reminders - This feature is set for future updates
          </li>
          <li>
            Collaborate with team members - This feature is set for future
            updates
          </li>
          <li>Track your progress with intuitive dashboards</li>
          <li>Access your tasks from any device</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Story</h2>
        <p className="text-white mb-4">
          Founded in 2024, Task Manager was born out of a passion for
          productivity and a desire to create a tool that simplifies task
          management. Our team of dedicated developers and designers work
          tirelessly to ensure that Task Manager remains at the forefront of
          productivity technology.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Vision</h2>
        <p className="text-white">
          We envision a world where everyone can achieve their goals efficiently
          and stress-free. Task Manager is our contribution to this vision,
          empowering users to take control of their tasks and make the most of
          their time.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
