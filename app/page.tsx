import Link from "next/link";
import { Button } from "./components/Button";
import { WeatherWidget } from "./components/WeatherWidget";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to Task Manager</h1>
          <p className="text-xl mb-8">
            Streamline your productivity with our intuitive task management
            solution
          </p>
          <Link href="/tasks">
            <Button className="text-lg px-8 py-3">Get Started</Button>
          </Link>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FeatureItem
              icon="📅"
              title="Organize Your Tasks"
              description="Easily create, categorize, and prioritize your tasks to stay on top of your workload."
            />
            <FeatureItem
              icon="🔔"
              title="Smart Reminders"
              description="Set up notifications and never miss a deadline again with our intelligent reminder system."
            />
            <FeatureItem
              icon="📊"
              title="Track Progress"
              description="Visualize your productivity with intuitive charts and progress indicators."
            />
          </div>

          <div className="bg-white bg-opacity-20 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Today&apos;s Weather
            </h2>
            <WeatherWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start">
      <div className="text-3xl mr-4">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
}
