import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [userData, setuserData] = useState([]);
    const [userEmail, setuserEmail] = useState();
    const [userPassword, setuserPassword] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/user")
            .then(async (res) => {
                const rawData = await res.data;
                setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);

    const loginHandler = (e) => {
        e.preventDefault();
        const rawData = userData.filter((data) => {
            if (data.email == userEmail && data.passWard == userPassword) {
                return (
                    { data }
                )
            }
        })
        console.log(rawData);
        const filterData = rawData[0]._id;
        console.log(filterData);
        navigate(`/dashbord/${filterData}`)
    }

    return (
        <>
            <div className='mainContcatUs'>
                <div className='contactUs'>
                    <form className='inputForm' onSubmit={loginHandler}>
                        <input type="text" placeholder='Enter Email' onChange={(e) => setuserEmail(e.target.value)} value={userEmail} />
                        <input type="password" placeholder='Password' onChange={(e) => setuserPassword(e.target.value)} value={userPassword} />
                        <button type="submit" className='loginBtn'>Login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;