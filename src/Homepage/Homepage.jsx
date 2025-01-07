import { Navbar } from "../Navbar/Navbar"
import './Homepage.css';

export function Homepage() {
    return(
        <>
            <Navbar />
            <section className="dashboard">
                <div className="left-section">
                    <li><a> Your Dashboard </a></li>
                    <li><a> Messages </a></li>
                    <li><a> Chatbot </a></li>
                </div>
                <div className="profile-section">
                    <div className="image">
                        <img />
                    </div>
                </div>
                <div className="medicals">
                    <div className="medical-history">
                        Your blood group
                    </div>
                </div>
            </section>
        </>
    )
}