import Navbar from './components/Navbar';
import { useState } from 'react';
  function App() {

    const [activeTab, setActiveTab] = useState('home');
    return (
      <div>
        <Navbar activeTab = {activeTab} onTabChange={setActiveTab}/>
        {activeTab === 'home' && <h1>Home View</h1>}
      </div>
    )
  }
export default App