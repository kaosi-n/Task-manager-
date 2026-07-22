import React from "react";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function MainCon({ tasks, setTasks }) {
  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  const totalTask = tasks.length;
  const highPriorityCount = tasks.filter(
    (task) => task.priority === "High",
  ).length;
  const completedCount = tasks.filter((task) => task.checked === true).length;
  const pendingCount = tasks.filter((task) => task.checked !== true).length;

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const hour = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const date = `${year}-${month}-${day}`;
  const time = `${hour}:${minutes}`;
  const overDueCount = tasks.filter(
    (task) =>
      (task.dueDate < date || (task.dueDate === date && task.time < time)) &&
      !task.checked,
  ).length;

  const todaysTaskCount = tasks.filter((task) => task.dueDate === date).length;
  const upcomingTasks = tasks.filter(
    (task) =>
      task.dueDate > date ||
      (task.dueDate === date && task.time > time && !task.checked),
  );

  return (
    <div>
      <div className="main-con">
        <div className="box-1 grid">
          <div className="box1-1 grid2 grid">
            <span>Total Tasks</span>
            <span style={{ fontSize: "1.4em", fontWeight: "bold" }}>
              {totalTask}
            </span>
            <i
              style={{
                backgroundColor: "rgba(177, 181, 246, 0.56)",
                color: "rgb(66, 66, 107)",
              }}
              className="bi bi-bullseye"
            ></i>
          </div>
          <div className="box1-2 grid2 grid">
            <span>Completed</span>
            <span style={{ fontSize: "1.4em", fontWeight: "bold" }}>
              {completedCount}
            </span>
            <i
              style={{
                backgroundColor: "rgba(169, 246, 169, 0.56)",
                color: "rgb(86, 115, 82)",
              }}
              className="bi bi-check2-circle"
            ></i>
          </div>
          <div className="box1-3 grid2 grid">
            <span>Pending</span>
            <span style={{ fontSize: "1.4em", fontWeight: "bold" }}>
              {pendingCount}{" "}
            </span>
            <i
              style={{
                backgroundColor: "rgba(249, 249, 183, 0.56)",
                color: "rgb(121, 118, 78)",
              }}
              className="bi bi-clock"
            ></i>
          </div>
          <div className="box1-4 grid2 grid">
            <span>Overdue</span>
            <span style={{ fontSize: "1.4em", fontWeight: "bold" }}>
              {overDueCount}
            </span>
            <i
              style={{
                backgroundColor: "rgba(252, 170, 170, 0.56)",
                color: "rgb(112, 73, 73)",
              }}
              className="bi bi-exclamation-triangle"
            ></i>
          </div>
        </div>
        <div className="box-2 grid">
          <div className="box2-1 grid3">
            <div style={{ fontSize: "1.2em", fontWeight: "bold" }}>
              Quick Stats
            </div>
            <div className="quickOption">
              <div>
                <span>Today's Tasks</span>
                <span style={{ fontWeight: "bold" }}> {todaysTaskCount} </span>
              </div>
              <div>
                <span>This Week</span>
                <span style={{ fontWeight: "bold" }}>0</span>
              </div>
              <div>
                <span>High Priority</span>
                <span style={{ fontWeight: "bold", color: "red" }}>
                  {highPriorityCount}
                </span>
              </div>
            </div>
          </div>
          <div className="box2-1 grid3">
            <div style={{ fontSize: "1.2em", fontWeight: "bold" }}>
              upcoming
            </div>
            <div>
              {upcomingTasks.map((task, index) => (
                <p className="upcoming-tasks" key={index}>
                  {task.title}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="box-3 grid">
          <div className="grid4">
            <Doughnut
              data={{
                labels: ["Completed", "Pending", "Overdue"],
                datasets: [
                  {
                    label: "Count",
                    data: [completedCount, pendingCount, overDueCount],
                    backgroundColor: [
                      "rgb(148, 187, 186)",
                      "rgb(246, 194, 120)",
                      "rgb(194, 120, 146)",
                    ],
                    borderWidth: 0,
                    borderRadius: 1,
                    hoverOffset: 4,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: "#f3eae1", // Change legend text color
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="box-4 grid">
          <div
            className="taskOverView"
            style={{ fontSize: "1.2em", fontWeight: "bold" }}
          >
            Tasks Overview
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li className="tOlist" key={index}>
                <span className="tOspan">
                  <span>{task.title} </span>
                  <span className="listIcon">
                    <i
                      onClick={() => deleteTask(index)}
                      class="bi bi-trash3"
                    ></i>
                    <i
                      onClick={() => moveTaskUp(index)}
                      class="bi bi-chevron-up"
                    ></i>
                    <i
                      onClick={() => moveTaskDown(index)}
                      class="bi bi-chevron-down"
                    ></i>
                  </span>{" "}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
