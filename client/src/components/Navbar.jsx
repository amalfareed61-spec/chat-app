import "./Navbar.css";

function Navbar({ activeTab, setActiveTab }) { 
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">ChatApp</div>
      
      <div className="navbar-links">
        <button 
          className={`navbar-btn ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        
        <button 
          className={`navbar-btn ${activeTab === 'chats' ? 'active' : ''}`}
          onClick={() => setActiveTab('chats')}
        >
          Chats
        </button>
        
        <button 
          className={`navbar-btn ${activeTab === 'account' ? 'active' : ''}`}
          onClick={() => setActiveTab('account')}
        >
          Account
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
