"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./Button";

export function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            <span className="text-xl font-bold text-white">Task Manager</span>
          </Link>

          {/* Hamburger menu for mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-7">
            {session ? (
              <>
                <Link href="/tasks" className="text-white hover:text-gray-200">
                  Tasks
                </Link>
                <Link href="/about" className="text-white hover:text-gray-200">
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-200"
                >
                  Contact
                </Link>
                <div className="flex items-center space-x-2">
                  {session.user?.image ? (
                    <img
                      src={session.user.image}
                      alt="Profile"
                      className="w-5 h-5 rounded-full"
                    />
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  )}
                  <span className="text-gray-300">
                    {session.user?.name || session.user?.email}
                  </span>
                  <Button
                    onClick={() => signOut()}
                    variant="secondary"
                    size="small"
                  >
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <Button variant="secondary">Sign In</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {session ? (
              <>
                <Link
                  href="/tasks"
                  className="block text-white hover:text-gray-200"
                >
                  Tasks
                </Link>
                <Link
                  href="/about"
                  className="block text-white hover:text-gray-200"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block text-white hover:text-gray-200"
                >
                  Contact
                </Link>
                <div className="flex items-center space-x-2">
                  {session.user?.image ? (
                    <img
                      src={session.user.image}
                      alt="Profile"
                      className="w-5 h-6 rounded-full"
                    />
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  )}
                  <span className="text-gray-300">
                    {session.user?.name || session.user?.email}
                  </span>
                </div>
                <Button
                  onClick={() => signOut()}
                  variant="secondary"
                  size="small"
                  className="w-full"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/signin" className="block">
                  <Button variant="secondary" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup" className="block">
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
