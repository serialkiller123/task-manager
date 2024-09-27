"use client";

import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("success");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Get in Touch
          </h2>
          <p className="text-white mb-4">
            We'd love to hear from you! Whether you have a question about
            features, trials, pricing, or anything else, our team is ready to
            answer all your questions.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <p className="text-white">support@taskmanager.com</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
            <p className="text-white">+960 9991111</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
            <p className="text-white">
              H. Ocean Pearl, 5th Floor, Boduthakurufaanu Magu, Mal , 20077,
              Maldives
            </p>
          </div>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                label="Name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 bg-white bg-opacity-20 border-0 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <Input
                label="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-white bg-opacity-20 border-0 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3 py-2 bg-white bg-opacity-20 border-0 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Your message here..."
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Send Message
            </Button>
          </form>
          {submitStatus === "success" && (
            <p className="mt-4 text-green-400">
              Thank you for your message. We'll get back to you soon!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-400">
              There was an error sending your message. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
