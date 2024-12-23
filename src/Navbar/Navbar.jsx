import './Navbar.css';

export function Navbar() {
    return (
        <section>
            <div className="site-logo"></div>
            <nav>
                <button> Home </button>
                <button> Our Services </button>
                <button> Find a Doctor </button>
            </nav>
            <div className="profile"></div>
        </section>
    );
}