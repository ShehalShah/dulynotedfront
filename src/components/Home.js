import React,{useContext} from 'react'
import notecontext from '../context/notes/notecontext'
import Notess from './Notess'
import bgimagehome1 from '../images/bgimage.jpg';

const Home = (props) => {
  const context = useContext(notecontext)
  const {notes,setnotes}=context
  
  return (
    <div style={{ backgroundImage: `url(${bgimagehome1})`, "height": "100vh", "width": "100vw", "position": "absolute", "background-size": "cover" }}>
     <Notess showAlert={props.showAlert}/>
    </div>
  )
}

export default Home