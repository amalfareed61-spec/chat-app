function Navbar({ activeTab, onTabChange }) {
    return (
        <div className="navbar">
            <button 
                className="home-button"
                onClick = { () => onTabChange('home')}>Home</button>
            <button 
                className="chats-button"
                onClick = { () => onTabChange('chats')}>Chats</button>
            <button 
                className="account-button"
                onClick = { () => onTabChange('account')}>Account</button>
        </div>
    )
}
 
export default Navbar;