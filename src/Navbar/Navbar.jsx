import './Navbar.css';

export function Navbar() {
    return (
        <section>
            <div className="site-logo"> Site Logo </div>
            <nav>
                <button> Home </button>
                <button> Medical Records </button>
                <button> Appointment </button>
                <button> Chatbot </button>
            </nav>
            <div className="right-section"> 
                <img src="" alt="Message"/>
                <span> Profile </span>
            </div>
        </section>
    );
}