import Message from "./Message";
import React, { useState, useEffect } from "react";

const Messages = ({ isDarkMode }) => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then((response) => response.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div
      className="message-container"
      style={
        isDarkMode
          ? { backgroundColor: "var(--bg-dark-color)", color: "white" }
          : { backgroundColor: "var(--bg-light-color" }
      }
    >
      <div className="message-header">
        <h4>Messages</h4>
        <i className="bx bx-edit"></i>
      </div>
      <div className="search-messages-container">
        <i className="bx bx-search bx-fw"></i>
        <input type="text" placeholder="Search for messages , posts" />
      </div>
      <div className="message-section">
        <div className="message-type">
          <p>Primary</p>
          <p>General</p>
          <p>Requests</p>
        </div>
        {message.map((element) => (
          <Message message={element} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
