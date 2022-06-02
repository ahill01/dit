import {Link,NavLink} from "react-router-dom";

function Navbar({handleLogout, currentUser,loggedIn}) {

    return (
    <nav className="navbar navbar-light navbar-expand-lg">
    <NavLink to="/" className="nav-link">Homepage</NavLink>
    <Link to="/login" className="nav-link" onClick={handleLogout}>{currentUser.id !== undefined ? "Logout": "Login"}</Link>
    {loggedIn ? (<Link to="/manage-account">Manage Account</Link>):(<Link to="/signup">Sign up!</Link>)}
    <Link to="/inbox" className="nav-link">Inbox</Link>
    <Link to="/community" className="nav-link">Community Board</Link>
    <Link to="/buddy" className="nav-link">Buddy Board</Link>
    </nav>)
    
    }
    
    export default Navbar