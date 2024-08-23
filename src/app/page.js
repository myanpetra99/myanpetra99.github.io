'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const messages = [
    "Hi there!",
    "My name is Michael Yan Petra.",
    "I'm sorry, my website is currently under development",
    "The old one kinda look meh~ 😬",
    "I'm not an AI, this isn't chatGPT or something 😶‍🌫️",
    "Do you still need something?"
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [userMessages, setUserMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    const timers = [];

    if (currentStep < messages.length) {
      const currentMessage = messages[currentStep];
      const typingDuration = (currentMessage.length / 5) * 1000; // Calculate duration based on message length
      
      // Show typing indicator for the calculated duration, then reveal the text
      timers.push(setTimeout(() => setCurrentStep(currentStep + 1), typingDuration));
    }else{
      setEnable(true)
    }

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [currentStep, messages.length]);

  const handleSendMessage = () => {
    if (inputValue.trim() && enable) {
      setUserMessages([...userMessages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="p-5 max-w-md mx-auto flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        {messages.map((message, index) => (
          currentStep >= index && (
            <div key={index} className={`chat-bubble ${currentStep === index ? 'fade-in' : ''}`}>
              {currentStep === index && <TypingIndicator />}
              {currentStep > index && <span>{message}</span>}
            </div>
          )
        ))}
        {userMessages.map((message, index) => (
          <div key={index} className={`chat-bubble user-chat-bubble fade-in`}>
            <span>{message}</span>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full  p-4 ">
        <div className="max-w-md mx-auto flex space-x-2">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 p-2 border rounded-lg text-black"
            placeholder="Type a message..."
          />
          <button 
            onClick={handleSendMessage}
            className={`${enable ? `bg-blue-500 text-white cursor-pointer`: `bg-gray-700 text-gray cursor-not-allowed`} px-4 py-2 rounded-lg`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-center items-center h-5 space-x-1">
      <span className="dot w-2 h-2 bg-gray-500 rounded-full animate-blink"></span>
      <span className="dot w-2 h-2 bg-gray-500 rounded-full animate-blink animation-delay-200"></span>
      <span className="dot w-2 h-2 bg-gray-500 rounded-full animate-blink animation-delay-400"></span>
    </div>
  );
}
