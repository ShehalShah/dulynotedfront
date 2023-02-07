import React, { useContext,useState, useEffect, useRef } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import notecontext from '../context/notes/notecontext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

const Notess = (props) => {
    const context = useContext(notecontext)
    const { notes, getNotes,editNote } = context

//taking reference of buttons via useref hoo
    const ref = useRef(null)
    const refclose = useRef(null)
    let navigate=useNavigate()

    const [note, setnote] = useState({id:"" ,etitle:"",edescription:"",etag:""})
    useEffect(() => {
        if(localStorage.getItem("token")){
        getNotes();
        }
        else{
            navigate('/login');
        }
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click()
        setnote({id: currentNote._id,etitle: currentNote.title,edescription: currentNote.description,etag: currentNote.tag});
    }

    const handleAddclick=(e)=>{
        editNote(note.id,note.etitle,note.edescription,note.etag)
        refclose.current.click();
        props.showAlert("Updated successfully","success")
    }

    const onChange=(e)=>{
        //spread operator
        setnote({...note,[e.target.name]:e.target.value})
    }

    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" value={note.etitle}className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" value={note.edescription} className="form-control" id="edescription" name="edescription" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" value={note.etag}className="form-control" id="etag" name="etag" onChange={onChange} />
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.etitle.length<5||note.edescription.length<5} onClick={handleAddclick} className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3 mx-4 container">
                <h2 >Your Notes</h2>
                <div className="mx-1">
                {notes.length===0&& "NO NOTES TO DISPLAY!"}
                </div>
                {
                    notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>;
                    })
                }
            </div>
        </>
    )
}

export default Notess