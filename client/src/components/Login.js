import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';

function Login({ setCurrentUser }) {
    const [credentials, setCredentials] = useState({
        username:"",
        password:""
    })
  
    let navigate = useNavigate();

    function handleChange(e){
        if(e.target.name === "username") {
            setCredentials(prevState => ({...prevState, username:e.target.value}))
        } else {
            setCredentials(prevState => ({...prevState, password:e.target.value}))
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({credentials}) 
       })
       .then(res=> res.json())
       .then((user) => {
           setCurrentUser(user)
           navigate('/inbox')
        })
}

    return (
        <div className='login'>
            <h1 id='loginTitle'>DIT</h1>
            <h2>Do It Together :DIT</h2>
                <form onSubmit={handleSubmit} >
                     <h2 id='loginSubtitle'>Log into your account</h2>
                     <label>
                         Username:
                         <input type='text' name='username' value={credentials.username} onChange={handleChange} autoFocus />
                     </label>
                     <label>
                         Password:
                         <input type='text' name='password' value={credentials.password} onChange={handleChange} />
                     </label>
            
                     <button className='loginButton'>Sign In</button>
                </form>
            <div>
                {/* <h4>Don't have an account?</h4>
                    <Link to="/Sign-up">
                        <button className='signUpButton'type="button">Sign Up</button>
                    </Link> */}
            </div>
        </div>
        
    )
    }

export default Login; 