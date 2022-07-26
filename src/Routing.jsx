import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Adduser from './Adduser';
import Home from './Home';
import Edit from './Edit';
import Delete from './Delete';
import Login from './Login';
import Dashbord from './Dashbord';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path={"/"} element={<Home />} />
                <Route exact path={"/Home"} element={<Home />} />
                <Route exact path={"/Adduser"} element={<Adduser />} />
                <Route exact path={"/Edit/:userID"} element={<Edit />} />
                <Route exact path={"/Delete/:userID"} element={<Delete />} />
                <Route exact path={"/login"} element={<Login />} />
                <Route exact path={"/dashbord/:userID"} element={<Dashbord />} />
            </Routes>
        </>
    );
};

export default Routing;