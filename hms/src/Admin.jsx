import React from 'react';
import './admin.css'; // Importing the CSS for the dashboard

const Admin = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li>Home</li>
                    <li>Register Student</li>
                    <li>Attendance</li>
                    <li>Mess</li>
                    <li>Invoices</li>
                    <li>Complaints</li>
                    <li>Hostel Allocation</li>
                    <li>All Students</li>
                </ul>
                <button className="logout-btn">Log Out</button>
            </div>

            <div className="main-content">
                <div className="header">
                    <div className="welcome">
                        <h1>Welcome <span className="highlighted">XYZ</span>!</h1>
                        <p>Warden, Hostel 1</p>
                    </div>
                    <div className="time">9:15:40 PM</div>
                </div>

                <div className="stats">
                    <div className="stat-box">
                        <h2>3</h2>
                        <p>Total Students</p>
                    </div>
                    <div className="stat-box">
                        <h2>12</h2>
                        <p>Total Complaints</p>
                    </div>
                    <div className="stat-box">
                        <h2>1</h2>
                        <p>Total Student Applied for hostel allocation</p>
                    </div>
                </div>

                <div className="content-section">
                    <div className="content-box">
                        <h3>New mess</h3>
                        <p>Atharv [ Room: 212 ]</p>
                        <p>May 29 to May 31</p>
                        <button>Manage mess</button>
                    </div>

                    <div className="chart-box">
                        <h3>Daily Complaints</h3>
                        {/* Add your chart here */}
                    </div>

                    <div className="content-box">
                        <h3>New</h3>
                        <p>Fee</p>
                        <button>Manage Allocation</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;

