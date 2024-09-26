import React, { useState } from "react";
import { Button } from "./Button";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  status: string;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, newStatus: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  status,
  onDelete,
  onStatusChange,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const getBgColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-700 bg-opacity-30";
      case "in-progress":
        return "bg-blue-700 bg-opacity-30";
      case "completed":
        return "bg-green-900 bg-opacity-80";
      default:
        return "bg-gray-700 bg-opacity-30";
    }
  };

  const handleDelete = () => {
    if (isDeleting) {
      onDelete(id);
    } else {
      setIsDeleting(true);
    }
  };

  return (
    <div
      className={`${getBgColor(
        status
      )} shadow-lg rounded-lg p-6 mb-4 transition-all duration-300 hover:shadow-xl backdrop-filter backdrop-blur-lg`}
    >
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
        <select
          value={status}
          onChange={(e) => onStatusChange(id, e.target.value)}
          className="mr-4 p-2 rounded bg-white bg-opacity-20 text-gray-900 border-0 focus:ring-2 focus:ring-blue-400"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        {isDeleting ? (
          <div className="flex items-center space-x-2">
            <span className="text-white mr-2">Are you sure?</span>
            <Button variant="danger" onClick={handleDelete} size="small">
              Yes
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIsDeleting(false)}
              size="small"
            >
              No
            </Button>
          </div>
        ) : (
          <Button variant="danger" onClick={handleDelete} size="small">
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};
