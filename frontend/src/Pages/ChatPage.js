import React, { useEffect, useState } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await client.get("/api/chats");
    setChats(data);
    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
