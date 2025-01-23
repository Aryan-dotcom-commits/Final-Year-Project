import './Messages.css';

function Messages() {
    return(
        <>
            <section className='message-box'>
                <div className="messages-profile">
                    <h1> Chats </h1>
                    <input type='search' />

                    <div className="user-list">
                        <img />
                        <p> Username </p>
                    </div>
                </div>

                <div className="message-area">
                    <div className="chat-profile">
                        <img />
                        <p> Username </p>
                        <input type='search'/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Messages;