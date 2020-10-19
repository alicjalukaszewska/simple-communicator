import React, { useState, useEffect } from "react";
import Message from "./components/Message";
import MessageForm from "./components/MessageForm";
import "./styles.css";

import db from "./config";

export default function App() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.ref("/messages").on("value", (snapshot) => {
      const fbMessages = snapshot.val();
      const convertedMessages = Object.entries(fbMessages || {}).map(
        ([id, message]) => ({
          ...message,
          id
        })
      );
      setMessages(convertedMessages);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageObj = {
      user: "Patryk",
      content: newMessage,
      datetime: Date.now()
    };
    if (newMessage) {
      console.log("Message: ", messageObj);
      db.ref("/messages").push(messageObj);
      setNewMessage("");
    }
  };

  return (
    <div className="App">
      {messages.map((message) => (
        <Message key={message.id} message={message}></Message>
      ))}
      <MessageForm
        message={newMessage}
        handleSubmit={handleSubmit}
        handleContentChange={setNewMessage}
      />
    </div>
  );
}
