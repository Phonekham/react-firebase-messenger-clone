import React, { useState, useEffect } from "react";
import { Button, FormControl, Input } from "@material-ui/core";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

import "./App.css";
import "./Message.css";
import Message from "./Message";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { username, message: input }]);
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <FlipMove className="msg-container">
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} username={username}></Message>
        ))}
      </FlipMove>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Message"
            className="app__input"
          ></Input>
          <Button
            className="app__button"
            disabled={!input}
            onClick={sendMessage}
            variant="contained"
            color="primary"
          >
            <SendIcon color="primary"></SendIcon>
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
