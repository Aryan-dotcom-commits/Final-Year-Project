import { Navbar } from "../Navbar/Navbar";
import "./Homepage.css";
import { Calendar } from 'react-calendar';

export function Homepage() {
    return (
        <>
            <Navbar />
            <section className="dashboard">
                <div className="left-section">
                    <div className="nav">
                        <button onClick={() => window.location.href = "#"}> Your Dashboard </button>
                        <button onClick={() => window.location.href = "/messages"}> Messages </button>
                        <button onClick={() => window.location.href = "/chatbot"}> Chatbot </button>
                    </div>
                </div>

                <div className="middle-section">
                    <div className="profile">
                        <div className="image">
                            <img src="" alt="Profile" />
                        </div>
                        <div className="user-details">
                            <span> Username </span>
                            <span> Ph number </span>
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    <h2>Medical History</h2>
                    <div className="medical-history">
                        <div className="history-item">
                            <h3>Blood Group</h3>
                            <p>O+</p>
                        </div>

                        <div className="history-item">
                            <h3>Upcoming Appointments</h3>
                            <p>Dr. John Doe - Jan 25, 2025</p>
                        </div>

                        <div className="history-item">
                            <h3>Your Appointments </h3>
                            <div className="calender">
                                <Calendar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
