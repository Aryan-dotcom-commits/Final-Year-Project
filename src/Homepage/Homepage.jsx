import { Navbar } from "../Navbar/Navbar";
import "./Homepage.css";

export function Homepage() {
    return (
        <>
            <Navbar />
            <section className="dashboard">
                <div className="left-section">
                    <div className="nav">
                        <button> Your Dashboard </button>
                        <button> Messages </button>
                        <button> Chatbot </button>
                    </div>
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
                            <h3>Previous Checkups</h3>
                            <p>Annual Physical - Dec 10, 2024</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
