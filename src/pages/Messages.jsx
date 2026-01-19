import React, { useEffect, useState } from "react";
import { Search, Send, Bell, Settings } from "lucide-react";
import NavBar from "../components/NavBar";

/* ================= TOKEN ================= */
const USER_TOKEN = "lodgify-token-123";
const STORAGE_KEY = `lodgify:messages:${USER_TOKEN}`;

/* ================= STORAGE ================= */
const loadData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

/* ================= COMPONENT ================= */
const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  /* ---------- Load ---------- */
  useEffect(() => {
    const stored = loadData();
    if (stored.length === 0) {
      const seed = [
        {
          id: "1",
          name: "Alice Johnson",
          unread: 1,
          lastMessage: "Can I request a late check-out?",
          messages: [
            {
              id: 1,
              sender: "guest",
              text: "Can I request a late check-out?",
              time: "09:15 AM",
            },
          ],
        },
        {
          id: "2",
          name: "Michael Brown",
          unread: 0,
          lastMessage: "Is parking available?",
          messages: [
            {
              id: 1,
              sender: "guest",
              text: "Is parking available?",
              time: "Yesterday",
            },
          ],
        },
      ];
      setConversations(seed);
      saveData(seed);
    } else {
      setConversations(stored);
    }
  }, []);

  /* ---------- Open chat ---------- */
  const openChat = (chat) => {
    const updated = conversations.map(c =>
      c.id === chat.id ? { ...c, unread: 0 } : c
    );
    setConversations(updated);
    saveData(updated);
    setActiveChat(updated.find(c => c.id === chat.id));
  };

  /* ---------- Send message ---------- */
  const sendMessage = () => {
    if (!message.trim() || !activeChat) return;

    const newMsg = {
      id: Date.now(),
      sender: "admin",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const updated = conversations.map(c =>
      c.id === activeChat.id
        ? {
            ...c,
            lastMessage: message,
            messages: [...c.messages, newMsg],
          }
        : c
    );

    setConversations(updated);
    saveData(updated);
    setActiveChat(updated.find(c => c.id === activeChat.id));
    setMessage("");
  };

  const filtered = conversations.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <NavBar/>

      {/* ================= MESSAGE LIST ================= */}
      <div className="w-[360px] bg-white border-r flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold mb-3">Messages</h1>
          <div className="flex items-center border rounded px-3 py-2">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, chat, etc"
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filtered.map(chat => (
            <div
              key={chat.id}
              onClick={() => openChat(chat)}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                activeChat?.id === chat.id ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex justify-between">
                <span className="font-semibold">{chat.name}</span>
                {chat.unread > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 rounded-full">
                    {chat.unread}
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-500 truncate mt-1">
                {chat.lastMessage}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CHAT WINDOW ================= */}
      <div className="flex-1 flex flex-col bg-white">
        {!activeChat ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <div className="text-5xl mb-4">💬</div>
            Select a conversation to start messaging
          </div>
        ) : (
          <>
            <div className="p-4 border-b flex justify-between">
              <span className="font-semibold">{activeChat.name}</span>
              <div className="flex gap-4">
                <Settings className="w-5 h-5 text-gray-500" />
                <Bell className="w-5 h-5 text-gray-500" />
              </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-3">
              {activeChat.messages.map(msg => (
                <div
                  key={msg.id}
                  className={`max-w-md p-3 rounded-lg text-sm ${
                    msg.sender === "admin"
                      ? "ml-auto bg-lime-400"
                      : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                  <div className="text-xs text-gray-600 mt-1 text-right">
                    {msg.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t flex gap-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 border rounded px-4 py-2"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className="bg-lime-400 p-2 rounded hover:bg-lime-500"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Messages;
