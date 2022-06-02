import {Link,NavLink} from "react-router-dom";

function Navbar2({handleLogout, currentUser,loggedIn}) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Do It Together!</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <NavLink to="/" className="nav-link">Homepage</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/login" className="nav-link" onClick={handleLogout}>{currentUser.id !== undefined ? "Logout": "Login"}</NavLink>
            </li>
            <li className="nav-item">
            {loggedIn ? (<NavLink to="/manage-account" className="nav-link">Manage Account</NavLink>):(<NavLink to="/signup" className="nav-link">Sign up!</NavLink>)}
            </li>
            <li className="nav-item">
            <NavLink to="/inbox" className="nav-link">Inbox</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/community" className="nav-link">Community Board</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/buddy" className="nav-link">Buddy Board</NavLink>
            </li>
          </ul>
          <span className="navbar-text right-align">
           
          </span>
        </div>
      </nav>
    )
    }
    
    export default Navbar2