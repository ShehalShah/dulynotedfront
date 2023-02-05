import React, { useContext,useState, useEffect, useRef } from 'react'
import notecontext from '../context/notes/notecontext'


const Dropdownuser = () => {
    const context = useContext(notecontext);
    const { user,getUserdetails } = context;

    useEffect(() => {
        getUserdetails();
    }, [])

    return (
        <div>
            <div class="btn-group">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Welcome {user.name}
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">ID: {user._id}</a></li>
                    <li><a class="dropdown-item" href="#">Name: {user.name}</a></li>
                    <li><a class="dropdown-item" href="#">Email: {user.email}</a></li>
                    <li><a class="dropdown-item" href="#">Date Joined: {user.date}</a></li>
                    
                    
                </ul>
            </div>
        </div>
    )
}

export default Dropdownuser