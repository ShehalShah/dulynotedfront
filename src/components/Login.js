import React,{useState} from 'react'

//hook to navigate pages
import { useNavigate } from 'react-router-dom'

const host="https://dulynoted.adaptable.app"

const Login = (props) => {
    const [cred, setcred] = useState({email:"",password:""})
    let navigate=useNavigate()

    const handleSubmit= async (e)=>{
        //dont reload
        e.preventDefault();

        const response = await fetch(`${host}/api/auth/login`, {
        
            method: 'POST', // *GET, POST, PUT, DELETE, etc
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:cred.email,password:cred.password})
          });
        const json=await response.json()
        console.log(json);
        if(json.success){
            //save the auth token and redirect if success=true(user logged in successfully)
            localStorage.setItem("token",json.authtoken);
            props.showAlert("Logged in successfully","success")
            navigate('/')
        }
        else{
            props.showAlert("invalid credentials try again","danger")
        }
    }

    const onChange=(e)=>{
        //spread operator
        setcred({...cred,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <h2 className='mt-5'>Log IN to continue to Duly Noted.</h2>
            <h6 className='my-3'>Click on sign up if you dont have an account.</h6>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address :</label>
                <input type="email" value={cred.email} className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password :</label>
                <input type="password" value={cred.password} className="form-control" id="password" name='password' onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
        </div>
    )
}

export default Login