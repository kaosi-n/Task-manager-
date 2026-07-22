import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import MainCon from "./MainCon";
import { Routes, Route } from "react-router";
import { useState } from "react";

import Alltask from "./pages/Alltask";
import Pending from "./pages/Pending";
import Completed from "./pages/Completed";
import Overdue from "./pages/Overdue";

export default function FullBody() {
  const [tasks, setTasks] = useState([
    {
      title: "Add greenery",
      description:
        "Use lots of eucalyptus, ruscus, fern, or other leafy greens around",
      priority: "Normal",
      dueDate: "2027-1-1",
      time: "10:47",
    },
    {
      title: "Use a spiral hand-tied style",
      description:
        "This spreads them outward and increases the bouquets width.This spreads them outward and increases the bouquets width.This spreads them outward and increases the bouquets width.This spreads them outward and increases the bouquets width.",
      priority: "Medium",
      dueDate: "2026-11-18",
      time: "10:47",
    },
    {
      title: "Huion",
      description:
        "18.4 Screen with 4K UHD Resolution, Dual Pen Powered by PenTech 4.0, Anti-sparkle Surface, 10 Points Finger Touch.",
      priority: "Medium",
      dueDate: "2021-6-11",
      time: "10:47",
    },
    {
      title: "Wrap it generously",
      description: "",
      priority: "High",
      dueDate: "2008-4-24",
      time: "10:47",
    },
  ]);
  const completedTask = tasks.filter((task) => task.checked === true);
  const pendingTask = tasks.filter((task) => task.checked !== true);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const hour = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const date = `${year}-${month}-${day}`;
  const time = `${hour}:${minutes}`;

  const overdueTask = tasks.filter(
    (task) =>
      (task.dueDate < date || (task.dueDate === date && task.time < time)) &&
      !task.checked,
  );

  return (
    <>
      <div className="full-body">
        <SideBar />
        <div className="main">
          <Header tasks={tasks} setTasks={setTasks} />
          <Routes>
            <Route
              path="/"
              element={<MainCon tasks={tasks} setTasks={setTasks} />}
            />
            <Route
              path="/Alltasks"
              element={<Alltask tasks={tasks} setTasks={setTasks} />}
            />
            <Route
              path="/Pending"
              element={<Pending tasks={pendingTask} setTasks={setTasks} />}
            />
            <Route
              path="/Completed"
              element={<Completed tasks={completedTask} setTasks={setTasks} />}
            />
            <Route
              path="/Overdue"
              element={<Overdue tasks={overdueTask} setTasks={setTasks} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
