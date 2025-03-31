import React from "react";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import aibot from "../public/ai-bot.jpg";
import aichatbot from "../public/ai-chatbot.jpg";
import Image from "next/image";
import { useState, useRef } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ChatMessage from "../components/ChatMessage";
import { TypeAnimation } from "react-type-animation";

const PopUp = () => {
  const [openChatMenu, setOpenChatMenu] = useState(false);
  function openChat() {
    setOpenChatMenu(!openChatMenu);
  }

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    const userMessage = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const { answer, sources } = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          text: answer,
          isBot: true,
          sources,
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I encountered an error!",
          isBot: true,
        },
      ]);
    }

    setInput("");
    setIsLoading(false);
  };
  return (
    <>
      <div>
        <div className="fixed floating bottom-32 md:bottom-36 right-7 md:right-10 text-xl z-50 cursor-pointer">
          <p className="relative md:right-10 top-1 right-14 p-1 bg-sky-500 rounded-xl text-xs">
            Ask InRain
          </p>
          <Image
            onClick={openChat}
            className="rounded-full border-2 border-black cursor-pointer"
            src={aibot}
            alt="img"
            height={60}
            width={60}
            loading="eager"
            priority={true}
            unoptimized={true}
          />
        </div>
        <div className="fixed bottom-16 md:bottom-20 right-7 md:right-10 text-xl z-30">
          <a href="tel:+919910220794" className="bg-sky-500 p-5 rounded-full">
            <CallIcon className="cursor-pointer" fontSize="medium" />
          </a>
        </div>
        <div className="fixed bottom-16 md:bottom-20 left-7 md:left-10 text-xl z-30">
          <a
            href="https://wa.me/919910220794"
            className="bg-green-500 p-5 rounded-full"
          >
            <WhatsAppIcon className="cursor-pointer" fontSize="medium" />
          </a>
        </div>
      </div>



      {/* for Mobile screen */}

      <div className="md:hidden">
        <div
          className="chatbar-ul rounded-xl bg-green-300 font-semibold"
          style={openChatMenu ? { bottom: "-1px" } : {}}
        >
          <div className="">
            <div className="">
              <div className="max-w-4xl mx-auto h-[75vh] flex flex-col">
                <div className="flex justify-center gap-3 items-center text-center">
                  <Image
                    src={aichatbot}
                    className="rounded-full"
                    alt="img"
                    height={50}
                    width={50}
                    loading="eager"
                    priority={true}
                    unoptimized={true}
                  />
                  <span className="font-semibold">
                    <TypeAnimation
                      sequence={["Hi! Ask InRain", 3000]}
                      repeat={Infinity}
                    />
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto mb-4 mt-5">
                  {messages.map((message, i) => (
                    <ChatMessage
                      key={i}
                      message={message}
                      isBot={message.isBot}
                    />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                {isLoading && (
                  <div className="text-center text-gray-500 mt-2">
                    Thinking...
                  </div>
                )}

                <form onSubmit={handleSubmit} className="relative m-5">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything about InRain..."
                    className="w-full p-4 pr-12 text-sm text-green-500 font-semibold rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-2 p-2 text-blue-500 hover:bg-blue-50 rounded-full"
                  >
                    <ArrowUpwardIcon className="w-6 h-6" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



          {/* for Desktop screen */}
      <div className="hidden md:flex justify-end">
        <div
          className="chatbar-ul-desktop mr-16 rounded-xl bg-green-300 font-semibold"
          style={openChatMenu ? { bottom: "50px" } : {}}
        >
          <div className="bottom-14">
            <div className="">
              <div className="max-w-4xl mx-auto h-[60vh] flex flex-col">
                <div className="flex justify-center gap-3 items-center text-center">
                  <Image
                    src={aichatbot}
                    className="rounded-full"
                    alt="img"
                    height={50}
                    width={50}
                    loading="eager"
                    priority={true}
                    unoptimized={true}
                  />
                  <span className="font-semibold">
                    <TypeAnimation
                      sequence={["Hi! Ask InRain", 3000]}
                      repeat={Infinity}
                    />
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto mb-2 mt-2">
                  {messages.map((message, i) => (
                    <ChatMessage
                      key={i}
                      message={message}
                      isBot={message.isBot}
                    />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                {isLoading && (
                  <div className="text-center text-gray-500 mt-2">
                    Thinking...
                  </div>
                )}

                <form onSubmit={handleSubmit} className="relative m-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything about InRain..."
                    className="w-full p-4 pr-12 text-sm text-green-600 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-2 p-2 text-blue-500 hover:bg-blue-50 rounded-full"
                  >
                    <ArrowUpwardIcon className="w-6 h-6" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
