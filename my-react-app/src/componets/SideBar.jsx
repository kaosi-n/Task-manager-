import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
// import Alltask from "./pages/Alltask";
// import { HashRouter, Routes, Route } from "react-router-dom";

export default function SideBar() {
  const links = [
    { name: "Dashboard", path: "/", class: "bi bi-house-fill" },
    { name: "All Tasks", path: "/AllTasks", class: "bi bi-list-task" },
    { name: "Pending", path: "/Pending", class: "bi bi-clock-history" },
    { name: "Completed", path: "/Completed", class: "bi bi-check-circle-fill" },
    {
      name: "Overdue",
      path: "/Overdue",
      class: "bi bi-exclamation-triangle-fill",
    },
  ];
  const [active, setActive] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }
  return (
    <div className="whole">
      <button className="menu" onClick={toggleSidebar}>
        <i class="bi bi-three-dots-vertical"></i>
      </button>
      <div
        className={
          showSidebar ? "sidebar sidebar-open" : "sidebar sidebar-closed"
        }
      >
        <div className="text">TaskMaster</div>
        <div className="links-list">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={active === index ? "cat active" : "cat"}
              onClick={() => setActive(index)}
            >
              <i className={link.class}></i>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
