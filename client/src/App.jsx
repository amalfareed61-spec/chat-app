import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <div>
      <Navbar activeTab = {activeTab} onTabChange={setActiveTab}/>
      {activeTab === 'home' && <HomeView />}
      {activeTab === 'chats' && <h1>Chats View</h1>}
      {activeTab === 'account' && <h1>Account View</h1>}
    </div>
  )
}
export default App