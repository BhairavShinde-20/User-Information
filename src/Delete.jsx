import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Delete.css';
const Delete = () => {
    const navigate = useNavigate();

    const { userID } = useParams();
    console.log(userID);

    const deletHandler = () => {
        axios.delete(`http://localhost:5000/user/${userID}`)
        .then(()=>{
            alert("delete Done")
            navigate("/")
        })
    }
    return (
        <div className='midle'>
            <button type="button" className="btn btn-danger" onClick={deletHandler}>Delete</button>
            <button type="button" className="btn btn-warning" onClick={() => navigate("/Home")}>Cancel</button>
        </div>
    );
};

export default Delete;