import React, { useContext, useState } from 'react'
import notecontext from '../context/notes/notecontext'
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';

const AddNote = (props) => {
    const context = useContext(notecontext)
    const { addNote } = context

    const [note, setnote] = useState({ title: "", description: "", tag: "" })
    const handleAddclick = (e) => {

        //so that page doesnt reload
        e.preventDefault();

        addNote(note.title, note.description, note.tag)

        //empty after adding
        setnote({ title: "", description: "", tag: "" })

        props.showAlert("Added successfully", "success")

    }

    const onChange = (e) => {
        //spread operator
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form>
                <div className="mb-3">
                    {/* <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={note.title} className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/> */}
                    <TextField type="text" value={note.title} name='title' onChange={onChange} id="outlined-basic" label="Title" variant="outlined" style={{ width: 600 }} minLength={5} required multiline />
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={note.description} className="form-control" id="description" name="description" onChange={onChange} minLength={5} required/> */}
                    <TextField type="text" value={note.description} name='description' onChange={onChange} id="outlined-basic" label="Description" variant="outlined" style={{ width: 600 }} minLength={5} required multiline />
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" value={note.tag}  className="form-control" id="tag" name="tag" onChange={onChange}/> */}
                    <TextField type="text" value={note.tag} name='tag' onChange={onChange} id="outlined-basic" label="Tag" variant="outlined" style={{ width: 600 }} />
                </div>
                <Button disabled={note.title.length < 5 || note.description.length < 5} type="submit" variant="contained" color='info' onClick={handleAddclick} component={motion.div}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 }
                    }}>Add Note</Button>
            </form>
        </div>
    )
}

export default AddNote