import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';

const Dashbord = () => {

    const { userID } = useParams();
    const [userData, setuserData] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];
                console.log(rawData);
               setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);
    console.log(userData);

    return (
        <div className=''>
            {userData.firstName}
            {userData.lastName}
        </div>
    );
};

export default Dashbord;