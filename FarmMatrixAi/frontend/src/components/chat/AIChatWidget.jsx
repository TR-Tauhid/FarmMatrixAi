import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const AIChatWidget = ({ position = "bottom-right", embedded = false }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [timeNow] = useState(() => Date.now());
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Hello! I'm your Farm AI Assistant. I can help you with:\n\n• Crop disease identification and treatment\n• Soil health analysis\n• Weather and climate advice\n• Market prices and trends\n• General farming questions\n\nHow can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  // Demo conversation about tomato disease
  const demoConversation = [
    {
      id: 1,
      role: "user",
      content:
        "My tomato plants have dark spots on leaves with yellow halos. What could this be?",
      timestamp: timeNow - 60000,
    },
    {
      id: 2,
      role: "assistant",
      content:
        "Based on your description, your tomato plants likely have **Early Blight** (Alternaria solani). This is a common fungal disease that shows:\n\n• Dark brown to black concentric spots\n• Yellow halos around lesions\n• Lower leaves affected first\n• Can spread rapidly in humid conditions",
      timestamp: timeNow - 55000,
    },
    {
      id: 3,
      role: "user",
      content: "How do I treat this and prevent it from spreading?",
      timestamp: timeNow - 45000,
    },
    {
      id: 4,
      role: "assistant",
      content:
        "Here's a comprehensive treatment plan:\n\n**Immediate Actions:**\n1. Remove and destroy infected leaves (don't compost)\n2. Improve air circulation between plants\n3. Avoid overhead watering - water at soil level\n\n**Chemical Treatment:**\n• Apply copper-based fungicide (follow label rates)\n• Chlorothalonil or mancozeb also effective\n• Rotate fungicides to prevent resistance\n\n**Prevention:**\n• Mulch to prevent soil splash\n• Remove plant debris after harvest\n• Rotate crops (3-4 year cycle)\n• Choose resistant varieties like 'Mountain Pride'\n\n⚠️ Act quickly - untreated early blight can cause 20-50% yield loss!",
      timestamp: timeNow - 35000,
    },
  ];

  const loadDemo = () => {
    setMessages(demoConversation);
    setIsOpen(true);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      
      // Force localhost URL if testing locally, otherwise use .env or fallback
      const API_URL = isLocalhost 
        ? 'http://localhost:5000/api' 
        : (import.meta.env.VITE_API_URL || 'https://farmmatrixai.onrender.com/api');

      const token = localStorage.getItem("token") || localStorage.getItem("accessToken");
      const headers = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers,
        body: JSON.stringify({ message: userMessage.content, history: messages })
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.response || `Server error: ${response.status}`);
      }

      const aiResponse = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.response || "Sorry, I couldn't reach the AI server.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Chat error:", error);
      
      let displayMessage = "Sorry, I couldn't reach the AI server. Please try again later.";
      if (error.message) {
        const errStr = error.message.toLowerCase();
        if (errStr.includes("503") || errStr.includes("high demand") || errStr.includes("overloaded")) {
          displayMessage = "The AI is currently experiencing high demand. Please try again in a few moments.";
        } else if (errStr.includes("429") || errStr.includes("quota")) {
          displayMessage = "The AI is currently overloaded with requests. Please wait a moment and try again.";
        } else if (errStr.includes("safety")) {
          displayMessage = "Your message was blocked by safety filters. Please rephrase and try again.";
        } else if (errStr.includes("googlegenerativeai") || errStr.includes("server error") || errStr.includes("fetch") || error.message.includes("[")) {
          displayMessage = "An unexpected technical issue occurred while processing your request. Please try again later.";
        } else {
          displayMessage = error.message;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: displayMessage,
          timestamp: new Date(),
          isError: true,
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Position styles
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  };

  const chatPositionClasses = {
    "bottom-right": "bottom-24 right-6 h-[500px] max-h-[80vh]",
    "bottom-left": "bottom-24 left-6 h-[500px] max-h-[80vh]",
  };

  const chatContainerClasses = embedded
    ? "h-full flex flex-col border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden"
    : `fixed ${chatPositionClasses[position]} z-50 w-96 max-w-[calc(100vw-3rem)] bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden transition-all duration-300`;

  if (!isOpen && !embedded) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed ${positionClasses[position]} z-50 w-14 h-14 bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 cursor-pointer`}
        aria-label="Open AI Chat"
        aria-label={t("chat.openChat")}
      >
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    );
  }

  return (
    <div className={chatContainerClasses}>
      {/* Header */}
      <div className="bg-emerald-600 dark:bg-emerald-700 p-4 flex items-center gap-3 z-999">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold">Farm AI Assistant</h3>
          <p className="text-emerald-100 text-xs">Online • Ready to help</p>
          <h3 className="text-white font-bold">{t("chat.title")}</h3>
          <p className="text-emerald-100 text-xs">{t("chat.status")}</p>
        </div>
        {!embedded && (
          <div className="flex gap-1">
            <button
              onClick={loadDemo}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
              title="Load Demo"
              title={t("chat.loadDemo")}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                window.dispatchEvent(new Event("open-sidebar-chat"));
                setIsOpen(false);
              }}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
              title="Maximize"
              title={t("chat.maximize")}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
              title="Close"
              title={t("chat.close")}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-3 ${
                msg.role === "user"
                  ? "bg-emerald-600 text-white"
                : msg.isError
                ? "bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50"
                : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              <p
                className={`text-xs mt-1 ${msg.role === "user" ? "text-emerald-200" : "text-slate-400"}`}
              >
                {formatTime(msg.timestamp)}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-3">
              <div className="flex gap-1">
                <span
                  className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            placeholder={t("chat.placeholder")}
            className="flex-1 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 dark:disabled:bg-slate-600 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatWidget;
