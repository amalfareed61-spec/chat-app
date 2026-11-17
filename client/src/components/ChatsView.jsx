import { useState } from "react";
import "./ChatsView.css";

function ChatsView () {
    //Memory for all converstaions and chat history
    //an array of objects
    const [conversations, setConversations] = useState ([
        {
            id: 1,
      name: 'Alice',
      messages: [
        { id: 101, sender: 'Alice', text: 'Hey! Are we still on for the study session?' },
        { id: 102, sender: 'Me', text: 'Yes, see you at 4 PM!' }
      ]
    },
    {
      id: 2,
      name: 'Bob',
      messages: [
        { id: 201, sender: 'Bob', text: 'Did you push the latest React changes?' }
      ]
        }
    ])
    //currently selected chat
    const [selectedChatId, setSelectedChatId] = useState(1)
    const [newMessage, setNewMessage] = useState('');

    const activeChat = conversations.find((chat) => chat.id === selectedChatId)

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

            const messageObj = {
                id:Date.now(), 
                sender:'Me',
                text:newMessage
            }

        // Map over conversations to update ONLY the currently active chat
        const updatedConversations = conversations.map((chat) => {
            if (chat.id === selectedChatId) {
            return {
                ...chat,
                messages: [...chat.messages, messageObj]
            };
            }
            return chat;
        });

        setConversations(updatedConversations);
        setNewMessage('');
    }

    return (
    <div className="chat-container">
      {/* Left Sidebar: Contact List */}
      <div className="chat-sidebar">
        <h3>Messages</h3>
        {conversations.map((chat) => {
          const isActive = chat.id === selectedChatId;
          return (
            <div
              key={chat.id}
              onClick={() => setSelectedChatId(chat.id)}
              className={`chat-contact-item ${isActive ? 'active' : ''}`}
            >
              {chat.name}
            </div>
          );
        })}
      </div>

      {/* Right Main Area: Active Conversation */}
      <div className="chat-main">
        {/* Chat Header */}
        <div className="chat-header">
          <h3>Chat with {activeChat.name}</h3>
        </div>

        {/* Message History Feed */}
        <div className="chat-messages-feed">
          {activeChat.messages.map((msg) => {
            const isMe = msg.sender === 'Me';
            return (
              <div 
                key={msg.id} 
                className={`message-bubble ${isMe ? 'me' : 'other'}`}
              >
                {!isMe && <div className="message-sender-name">{msg.sender}</div>}
                <div className="message-text">{msg.text}</div>
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <div className="chat-input-bar">
          <input
            type="text"
            placeholder={`Message ${activeChat.name}...`}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatsView;