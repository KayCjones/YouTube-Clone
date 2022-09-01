import React from 'react'
import { useNavigate } from "react-router-dom0"
import useAuth from "../..hooks/useAuth"
import useCustomForm  from "../../hooks/useCustomForm"


const AddComment = () =>{
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)

    function handleSubmit(event){
        event.preventDefault();
        let newComment = {
            user: user,
            video_id: "", 
            text: "",
            like: 0,
            dislikes: 0,
        };

    return (
       <form onSubmit={handleSubmit}>
            <div>
                <label>User</label>
                <input value={user} onChange={(event)=> set }></input>
                <label>Video ID</label>
                
            </div>

       </form>
        )
    }
}

export default AddComment;