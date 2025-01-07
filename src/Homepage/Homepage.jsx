import { Navbar } from "../Navbar/Navbar"
import './Homepage.css';

export function Homepage() {
    return(
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
                    Medical History 
                </div>
            </section>
        </>
    )
}