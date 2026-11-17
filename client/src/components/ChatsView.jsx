import { useState } from "react";

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
};

    return (
    <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
      {/* Left Sidebar: Contact List */}
      <div style={{ width: '200px', borderRight: '1px solid #ccc', paddingRight: '10px' }}>

        <h3>Chats</h3>
        {conversations.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChatId(chat.id)}
            style={{
              padding: '10px',
              cursor: 'pointer',
              fontWeight: chat.id === selectedChatId ? 'bold' : 'normal',
              backgroundColor: chat.id === selectedChatId ? '#f0f0f0' : 'transparent'
            }}
          >
            {chat.name}
          </div>
        ))}
      </div>

      

      {/* Right Main Area: Active Conversation */}
      <div style={{ flex: 1 }}>
        <h3>Chat with {activeChat.name}</h3>
        <div>
          {activeChat.messages.map((msg) => (
            <p key={msg.id}>
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
        </div>

        <div style={{ marginTop: '20px' }}>
            <input
                type="text"
                placeholder={`Message ${activeChat.name}...`}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatsView;