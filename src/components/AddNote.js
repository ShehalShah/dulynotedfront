import React,{useContext,useState} from 'react'
import notecontext from '../context/notes/notecontext'

const AddNote = (props) => {
    const context = useContext(notecontext)
    const {addNote}=context

    const [note, setnote] = useState({title:"",description:"",tag:""})
    const handleAddclick=(e)=>{

        //so that page doesnt reload
        e.preventDefault();

        addNote(note.title,note.description,note.tag)

        //empty after adding
        setnote({title:"",description:"",tag:""})

        props.showAlert("Added successfully","success")

    }

    const onChange=(e)=>{
        //spread operator
        setnote({...note,[e.target.name]:e.target.value})
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={note.title} className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={note.description} className="form-control" id="description" name="description" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" value={note.tag}  className="form-control" id="tag" name="tag" onChange={onChange}/>
                </div>
                <button disabled={note.title.length<5||note.description.length<5} type="submit" className="btn btn-primary" onClick={handleAddclick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote