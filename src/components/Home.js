import React,{useContext} from 'react'
import notecontext from '../context/notes/notecontext'
import Notess from './Notess'

const Home = (props) => {
  const context = useContext(notecontext)
  const {notes,setnotes}=context
  
  return (
    <div>
     <Notess showAlert={props.showAlert}/>
    </div>
  )
}

export default Home