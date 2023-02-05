import React, { useContext } from 'react'
import notecontext from '../context/notes/notecontext'

const NoteItem = (props) => {

    //to delete note importing deletnote method from context state
    const context = useContext(notecontext)
    const { deleteNote } = context

    const { note, updateNote } = props;

    return (
        <div className='col-md-4'>
            <div className="card my-3" >
                <div className="card-body">
                    <div className="d-flex">
                        <h4 className="card-title">{note.title}</h4>
                        <i className="fa-solid fa-pen-to-square mx-3 " onClick={() => { updateNote(note) }}></i>
                        <i className="fa-solid fa-trash mx-3 " onClick={() => {
                            deleteNote(note._id);
                            props.showAlert("Deleted successfully", "success")
                        }}></i>
                    </div>
                    <p className="card-text">{note.description} </p>

                </div>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{"z-index":"1"}}>
                {note.tag}
                    <span class="visually-hidden"></span>
                </span>
            </div>
        </div>
    )
}

export default NoteItem