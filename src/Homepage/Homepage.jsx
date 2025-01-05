import { Navbar } from "../Navbar/Navbar"
import './Homepage.css';

export function Homepage() {
    return(
        <>
            <Navbar />
            <section className="dashboard">
                <div className="left-section">
                    <li><a>Dashboard</a></li>
                    <li><a>Dashboard</a></li>
                    <li><a>Dashboard</a></li>
                </div>
                <div className="profile-section">
                    Profile
                </div>
                <div className="medicals">
                    Medicals 
                </div>
            </section>
        </>
    )
}