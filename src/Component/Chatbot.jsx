import React, { useState, useEffect } from "react";
import robo from "../Images/robot.png";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Saksham Softech India! How can I assist you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [blinking, setBlinking] = useState(true);
  
  const faq = {
    "Services": "We specialize in IT solutions, software development, and cloud services.",
    "Location": "Sr No. 19/1, Hingne Home Colony, Karve Nagar, Pune-411052",
    "Contact": "You can reach us at sakshamsoftech@gmail.com or +918010540275",
    "Industries Serve?": "We serve industries like finance, healthcare, and manufacturing.",
    "Cloud Services?": "Yes, we provide cloud computing and hosting solutions.",
    "Can I request a Demo?": "You can request a demo by contacting us via sakshamsoftech@gmail.com or +918010540275."
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking((prev) => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const handleUserMessage = (message) => {
    if (!message.trim()) return;
    
    let botReply = faq[message] || "Sorry, I don't have an answer for that.";
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, text: message, sender: "user" },
      { id: prev.length + 2, text: botReply, sender: "bot" }
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {blinking && (
        <div className="mb-2 p-2 bg-yellow-400 text-black font-bold rounded-md cursor-pointer shadow-lg animate-pulse" 
          onClick={() => setIsOpen(true)}>
          Hi S-Techie Here
        </div>
      )}

      <button className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex justify-center items-center" 
        onClick={() => setIsOpen(!isOpen)}>
        <img src={robo} alt="Chatbot" className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 max-w-full bg-white shadow-xl rounded-lg p-4 flex flex-col max-h-[400px] sm:max-h-[500px] overflow-hidden">
          <div className="flex justify-between items-center font-bold text-lg border-b pb-2">
            S-Techie
            <button className="text-gray-600" onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="flex-1 overflow-y-auto bg-gray-100 p-2 mt-2 rounded-md">
            {messages.map((msg) => (
              <div key={msg.id} className={`p-2 my-1 max-w-xs ${msg.sender === "bot" ? "bg-gray-300 text-black self-start" : "bg-blue-500 text-white self-end"} rounded-md`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {Object.keys(faq).map((question, index) => (
              <button key={index} className="p-2 bg-blue-500 text-white rounded-md text-sm" onClick={() => handleUserMessage(question)}>
                {question}
              </button>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-l-md"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUserMessage(input)}
            />
            <button className="p-2 bg-blue-500 text-white rounded-r-md" onClick={() => handleUserMessage(input)}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
