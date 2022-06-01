import {Link} from "react-router-dom";

function Navbar({handleLogout, currentUser,loggedIn}) {

    return (
    <div className="navbar">
    <Link to="/">Homepage</Link>
    <br></br>
    <Link to="/login" onClick={handleLogout}>{currentUser.id !== undefined ? "Logout": "Login"}</Link>
    <br></br>
    {loggedIn ? (<Link to="/manage-account">Manage Account</Link>):(<Link to="/signup">Sign up!</Link>)}
    <br></br>
    <Link to="/inbox">Inbox</Link>
    <br></br>
    <Link to="/community">Community Board</Link>
    <br></br>
    <Link to="/buddy">Buddy Board</Link>
    <br></br>
    </div>)
    
    }
    
    export default Navbar