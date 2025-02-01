import React from 'react';
import './DoctorHomepage.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Hospital Logo</div>
      <ul className="navbar__menu">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/patients">Patients</a></li>
        <li><a href="/appointments">Appointments</a></li>
        <li><a href="/messages">Messages</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
}

function DoctorProfileSummary() {
  return (
    <section className="doctor-profile">
      <img 
        src="https://via.placeholder.com/100" 
        alt="Doctor" 
        className="doctor-profile__image" 
      />
      <div className="doctor-profile__info">
        <h2>Dr. John Doe</h2>
        <p>Cardiologist</p>
        <p>Patients: 120</p>
        <p>Status: Online</p>
      </div>
    </section>
  );
}

function QuickActions() {
  return (
    <section className="quick-actions">
      <button className="action-button">View Patient Records</button>
      <button className="action-button">Write Prescription</button>
      <button className="action-button">Check Messages</button>
      <button className="action-button emergency">Emergency Alerts</button>
    </section>
  );
}

function DashboardOverview() {
  return (
    <section className="dashboard-overview">
      <h3>Upcoming Appointments</h3>
      <ul className="appointments-list">
        <li>
          <strong>Patient:</strong> Jane Smith <br />
          <strong>Time:</strong> 10:00 AM
        </li>
        <li>
          <strong>Patient:</strong> Bob Johnson <br />
          <strong>Time:</strong> 11:30 AM
        </li>
      </ul>
      <h3>Recent Notifications</h3>
      <ul className="notifications-list">
        <li>New message from Jane Smith</li>
        <li>Appointment rescheduled with Bob Johnson</li>
      </ul>
    </section>
  );
}

function Announcements() {
  return (
    <section className="announcements">
      <h3>Announcements</h3>
      <p>No new announcements.</p>
    </section>
  );
}

function DoctorDashboard() {
  return (
    <div className="doctor-dashboard">
      <Navbar />
      <div className="dashboard-content">
        <DoctorProfileSummary />
        <QuickActions />
        <DashboardOverview />
        <Announcements />
      </div>
    </div>
  );
}

export default DoctorDashboard;
