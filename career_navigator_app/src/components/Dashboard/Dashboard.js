import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { FaBell, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { auth } from "../../firebase"; // Import Firebase auth
import { signOut, onAuthStateChanged } from "firebase/auth";
import CareerInterestForm from "../CareerInterestForm/CareerInterestForm"; // Import CareerInterestForm
import Chatbot from "../SankalpAI/Chatbot"; // Import Chatbot

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState("Gyaan Setu"); // Default to CareerInterestForm

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the logged-in user
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">SANKALP.AI</h2>
        <nav className="menu">
          <button
            className={`menu-item ${activeSection === "Yukti" ? "active" : ""}`}
            onClick={() => setActiveSection("Yukti")}
          >
            <BiMessageDetail className="icon" /> Yukti
          </button>
          <button
            className={`menu-item ${
              activeSection === "Gyaan Setu" ? "active" : ""
            }`}
            onClick={() => setActiveSection("Gyaan Setu")}
          >
            <BiMessageDetail className="icon" /> Gyaan Setu
          </button>
          <button
            className={`menu-item ${
              activeSection === "Sankalp.AI" ? "active" : ""
            }`}
            onClick={() => setActiveSection("Sankalp.AI")}
          >
            <BiMessageDetail className="icon" /> Sankalp.AI
          </button>
          <button
            className={`menu-item ${
              activeSection === "Khel Khel Mein" ? "active" : ""
            }`}
            onClick={() => setActiveSection("Khel Khel Mein")}
          >
            <BiMessageDetail className="icon" /> Khel Khel Mein
          </button>
        </nav>
        <div className="user-info">
          <FaUserCircle className="user-icon" />
          <div>
            <p className="username">
              {user ? user.displayName || "User" : "Guest"}
            </p>
            <p className="user-email">{user ? user.email : "No Email"}</p>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <nav>
            <span>{activeSection}</span>
            <span className="section-title">
              {activeSection === "Gyaan Setu" ? " | Bridge of Knowledge" : ""}
            </span>
          </nav>
          <div className="header-actions">
            <FaBell className="notification-icon" />
            <span className="career-form">Career Interest Form</span>
          </div>
        </header>

        {/* Content Section */}
        <section className="content-container">
          {activeSection === "Gyaan Setu" ? (
            <CareerInterestForm />
          ) : activeSection === "Sankalp.AI" ? (
            <Chatbot />
          ) : (
            <div className="default-content">
              <h3>{activeSection}</h3>
              <p>Content for {activeSection} will be displayed here.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
