import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Adduser.css'

const Adduser = () => {

    const navigate = useNavigate();

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [mobNumber, setmobNumber] = useState();
    const [passWard, setpassWord] = useState("");
    const [email, setemail] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const dataObj = {
            firstName, lastName, mobNumber, passWard,email
        }
        console.log(dataObj);
        axios.post("http://localhost:5000/user", dataObj);//send dataObject
        setfirstName("");
        setlastName("");
        setmobNumber(0);
        setpassWord("");
        setemail("");
        navigate("/Home");// go to home page use navigate
    }
    return (
        <>
            <div className='formBg'>
                <div className='formContainer'>
                    <form onSubmit={submitHandler} className="setForm">
                        <div class="row1">
                            <div class="col">
                                <input type="text" class="form-control mt-3" placeholder="First name" aria-label="First name" onChange={(e) => setfirstName(e.target.value)} value={firstName} />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control mt-3" placeholder="Last name" aria-label="Last name" onChange={(e) => setlastName(e.target.value)} value={lastName} />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control mt-3" placeholder="Enter Email" aria-label="Last name" onChange={(e) => setemail(e.target.value)} value={email} />
                            </div>
                            <div class="col">
                                <input type="number" class="form-control mt-3" placeholder="Mob Number" aria-label="Mob Number" onChange={(e) => setmobNumber(e.target.value)} value={mobNumber} />
                            </div>
                            <div class="col">
                                <input type="password" class="form-control mt-3" placeholder="Password" aria-label="Password" onChange={(e) => setpassWord(e.target.value)} value={passWard} />
                            </div>
                            <div className='text-center'><button type="submit" className="btn btn-info mt-3">Submit</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Adduser;