import React, { useState } from 'react'

//hook to navigate pages
import { useNavigate } from 'react-router-dom'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import bgimage from '../images/bgimage.jpg'
import { motion } from 'framer-motion';


// const host="http://localhost:4000"
const host = "https://dulynoted.adaptable.app"

const Signup = (props) => {
  const [cred, setcred] = useState({ name: "", email: "", password: "", cpassword: "" })

  //for redirect
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    //dont reload
    e.preventDefault();
    const { name, email, password } = cred;
    const response = await fetch(`${host}/api/auth/createuser`, {

      method: 'POST', // *GET, POST, PUT, DELETE, etc
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json()
    console.log(json);
    //save the auth token and redirect
    if (json.success) {
      //save the auth token and redirect if success=true(user logged in successfully)
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Account created successfully", "success")
      navigate('/')

    }
    else {
      props.showAlert("Invalid credentials try again", "danger")
    }
  }

  const onChange = (e) => {
    //spread operator
    setcred({ ...cred, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ backgroundImage: `url(${bgimage})`, "height": "100vh", "width": "100vw", "position": "absolute", "background-size": "cover" }}>
      {/* <img src={bgimage} alt="" style={{"height":"100vh","width":"100vw","position" : "absolute"}}/> */}
      <Paper style={{ "height": "65vh", "width": "41vw", "position": "absolute", "margin-left": "30vw", "margin-top": "10vh" }} elevation={24} component={motion.div}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        initial={{ y: "-20vh", opacity: 0 }}
        animate={{ y: "0vh", opacity: 1 }}
        transition={{ duration: 0.7 }}>

        <div className='container mx-4' style={{ "width": "40vw" }} >
          <h2 className='mt-5'>Create an account to use Duly Noted.</h2>
          <h6 className='my-3'>Click on Login if you already have an account.</h6>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              {/* <label htmlFor="name" className="form-label">Name :</label>
          <input type="text" className="form-control " id="name" name='name' onChange={onChange} /> */}

              <TextField type="text" name='name' onChange={onChange} id="outlined-basic" label="Name :" variant="outlined" style={{ "width": "35vw" }} required />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="email" className="form-label">Email address :</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} /> */}

              <TextField type="email" name='email' onChange={onChange} id="outlined-basic" label="Email address :" variant="outlined" style={{ "width": "35vw" }} minLength={5} required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              {/* <label htmlFor="password" className="form-label">Set Strong Password :</label>
          <input type="password" className="form-control " name="password" id="password" onChange={onChange} minLength={5} required /> */}

              <TextField type="password" name='password' onChange={onChange} id="outlined-basic" label="Set Strong Password :" variant="outlined" style={{ "width": "35vw" }} minLength={5} required />

            </div>
            <div className="mb-3">
              {/* <label htmlFor="cpassword" className="form-label">Confirm your Password :</label>
          <input type="password" className="form-control " name="cpassword" id="cpassword" onChange={onChange} minLength={5} required/> */}

              <TextField type="password" name='cpassword' onChange={onChange} id="outlined-basic" label="Confirm your Password :" variant="outlined" style={{ "width": "35vw" }} minLength={5} required />
            </div>
            {/* <button type="submit" className="btn btn-primary">Sign up</button> */}
            <Button variant="contained" type="submit" component={motion.div}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}>SIgn up</Button>
          </form>
        </div>
      </Paper>
    </div>
  )
}

export default Signup