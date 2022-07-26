import React, { useState, useEffect } from 'react';
import './Edit.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    console.log(userID);

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [mobNumber, setmobNumber] = useState();
    const [passWard, setpassWord] = useState("");
    const [userData, setuserData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];
                console.log(rawData);
                setfirstName(rawData.firstName);
                setlastName(rawData.lastName);
                setmobNumber(rawData.mobNumber);
                setpassWord(rawData.passWard);
                setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);
    console.log(userData);

    const editHandler = (e) => {
        e.preventDefault();

        const dataObj = {
            firstName, lastName, mobNumber, passWard
        }
        console.log(dataObj);
        axios.put(`http://localhost:5000/user/${userID}`, dataObj)//send dataObject
            .then(res => {
                alert("user update")
                navigate("/home")
            })
            .catch(err => {
                alert(err);

            })

    }
    return (
        <div className='mainContcatUs'>
            <div className='contactUs'>
                <form onSubmit={editHandler} className='inputForm'>
                    <input type="text" placeholder='Firstname' onChange={(e) => setfirstName(e.target.value)} value={firstName} />
                    <input type="text" placeholder='Lastname' onChange={(e) => setlastName(e.target.value)} value={lastName} />
                    <input type="number" placeholder='Number' onChange={(e) => setmobNumber(e.target.value)} value={mobNumber} />
                    <input type="password" placeholder='Password' onChange={(e) => setpassWord(e.target.value)} value={passWard} />
                    <button type="submit" className='loginBtn'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;