import notecontext from "./notecontext";
import { useState } from "react";
const NoteState = (props) => {

  // const host="http://localhost:4000"
   const host="https://dulynoted.adaptable.app"

    const notesinitial =[]
    const [notes, setnotes] = useState(notesinitial);

    const userinitial =[]
    const [user, setuser] = useState(userinitial);

    

    //get all  notes
    const getNotes = async ()=>{

      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        
        method: 'GET', // *GET, POST, PUT, DELETE, etc
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem("token")
        },
      });
      const json=await response.json();
      setnotes(json)
    }

    //add notes
    const addNote = async (title,description,tag)=>{

      const response = await fetch(`${host}/api/notes/addnote`, {
        
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem("token")
        },
        body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
      });

      const note=await response.json()
      setnotes(notes.concat(note))
    }
    
    //delete note
    const deleteNote = async (id)=>{
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem("token")
        },
      });
      // const json=await response.json();

      //added to new notes only if notes id != given id
      const newNotes=notes.filter((n)=>{return n._id!==id})
      setnotes(newNotes)

    }

    //edit note 
    const editNote = async(id,title,description,tag)=>{


      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        
        method: 'PUT', // *GET, POST, PUT, DELETE, etc
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem("token")
        },
        body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
      });
      const json= response.json(); // parses JSON response into native JavaScript objects

      let newnotes=JSON.parse(JSON.stringify(notes))
      //for loop search for note with that id
      for (let index = 0; index < newnotes.length; index++) {
        const element = newnotes[index];
        if(element._id===id){
          newnotes[index].title=title;
          newnotes[index].description=description;
          newnotes[index].tag=tag
          break;
        }
      }
      setnotes(newnotes)
    }

    const getUserdetails = async ()=>{

      const response = await fetch(`${host}/api/auth/getuser`, {
        
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        headers: {
          "auth-token":localStorage.getItem("token")
        },
      });
      const json=await response.json();
      setuser(json);
    }

    return (
        <notecontext.Provider value={{notes,addNote,deleteNote,editNote,getNotes,user,getUserdetails}}>
            {props.children}
        </notecontext.Provider>
    )
}

export default NoteState;