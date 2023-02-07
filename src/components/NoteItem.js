import React, { useContext } from 'react'
import notecontext from '../context/notes/notecontext'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';

const NoteItem = (props) => {

    //to delete note importing deletnote method from context state
    const context = useContext(notecontext)
    const { deleteNote } = context

    const { note, updateNote } = props;

    return (
        <div className='col-md-4'>
            <motion.div className="card border-dark my-3" style={{ "max-width": "25rem", "height": "15rem" }}
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                }}
                initial={{ x: "-20vw", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ duration: 0.7 }}>
                <div className="card-body">
                    <div className="d-flex" >
                        <h4 className="card-title">{note.title}</h4>
                        {/* <i className="fa-solid fa-pen-to-square mx-3 " onClick={() => { updateNote(note) }}></i>
                        <i className="fa-solid fa-trash mx-3 " onClick={() => {
                            deleteNote(note._id);
                            props.showAlert("Deleted successfully", "success")
                        }}></i> */}
                        <Fab className="mx-2" color="primary" size="small" aria-label="edit" onClick={() => { updateNote(note) }} component={motion.div}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 }
                            }}>
                            <EditIcon />
                        </Fab>
                        <Fab className="mx-2" color="primary" size="small" aria-label="edit" onClick={() => {
                            deleteNote(note._id); props.showAlert("Deleted successfully", "success")
                        }} component={motion.div}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 }
                            }}>
                            <DeleteIcon />
                        </Fab>
                    </div>
                    <p className="card-text">{note.description} </p>

                </div>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{ "z-index": "1" }}>
                    {note.tag}
                    <span className="visually-hidden"></span>
                </span>
            </motion.div>
        </div>
    )
}

export default NoteItem