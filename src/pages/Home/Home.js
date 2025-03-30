import React from "react";
import ChatBot from "../../components/ChatBot/ChatBot";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  if (!token) {
    navigate("/login")
  }
  return (
    <div className="flex flex-row">
      <Navbar />
      <ChatBot />
    </div>
  );
};

export default Home;
