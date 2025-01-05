import './Navbar.css';

export function Navbar() {
    return (
        <section>
            <div className="site-logo"> Site Logo </div>
            <nav>
                <button> Home </button>
                <button> Medical Records </button>
                <button> Find a Doctor </button>
            </nav>
            <div className="profile"> Profile </div>
        </section>
    );
}