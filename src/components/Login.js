import React, { useState } from 'react'

//hook to navigate pages
import { useNavigate } from 'react-router-dom'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bgimage from '../images/bgimage.jpg';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import { motion } from 'framer-motion';

const host = "https://dulynoted.adaptable.app"



const Login = (props) => {
    const [cred, setcred] = useState({ email: "", password: "" })
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        //dont reload
        e.preventDefault();

        const response = await fetch(`${host}/api/auth/login`, {

            method: 'POST', // *GET, POST, PUT, DELETE, etc
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: cred.email, password: cred.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            //save the auth token and redirect if success=true(user logged in successfully)
            localStorage.setItem("token", json.authtoken);
            props.showAlert("Logged in successfully", "success")
            navigate('/')
        }
        else {
            props.showAlert("invalid credentials try again", "danger")
        }
    }

    const onChange = (e) => {
        //spread operator
        setcred({ ...cred, [e.target.name]: e.target.value })
    }

    return (
        <div style={{ backgroundImage: `url(${bgimage})`, "height": "100vh", "width": "100vw", "position": "absolute", "background-size": "cover" }}>
            <Paper style={{ "height": "50vh", "width": "40vw", "position": "absolute", "margin-left": "30vw", "margin-top": "10vh" }} elevation={24} component={motion.div}
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                }} 
                initial={{y:"-20vh",opacity:0}}
                animate={{y:"0vh",opacity:1}}
                transition= {{ duration: 0.7 }}>
                <div className='container mx-4' style={{ "width": "40vw" }}>
                    <h2 className='mt-5 '>Login to continue to Duly Noted.</h2>
                    <h6 className='my-3'>Click on sign up if you dont have an account.</h6>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            {/* <label htmlFor="email" className="form-label">Email address :</label>
                <input type="email" value={cred.email} className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange}/> */}
                            <TextField type="email" name='email' onChange={onChange} id="outlined-basic" label="Email" variant="outlined" style={{ "width": "35vw" }} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            {/* <label htmlFor="password" className="form-label">Password :</label> */}
                            {/* <input type="password" value={cred.password} className="form-control" id="password" name='password' onChange={onChange}/> */}

                            <TextField type="password" name='password' onChange={onChange} id="outlined-basic" label="Password" variant="outlined" style={{ "width": "35vw" }} />
                        </div>

                        {/* <button type="submit" className="btn btn-primary" >Submit</button> */}
                        <Button variant="contained" type="submit">Login</Button>

                    </form>
                </div>
            </Paper>
        </div>
    )
}

export default Login