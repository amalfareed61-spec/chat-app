import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ChatsView from './components/ChatsView';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'home' && <HomeView />}
      {activeTab === 'chats' && <ChatsView />}
      {activeTab === 'account' && <h1>Account View</h1>}
    </div>
  )
}
export default App