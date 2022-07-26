import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Home.css'
import Serchbar from './Serchbar';

const Home = () => {
    const navigate = useNavigate();

    const [userData, setuserData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/user")
            .then(async (res) => {
                const rawData = await res.data;
                setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);

    const serchHandel = "Serch All Data";

    const handelChang = (value) => {

        filterData(value)
    }

    const filterData = (value) => {
        const toLowerCase = value.toString().trim();
        if (!toLowerCase) {
            setuserData(userData);
            window.location.reload();
        }
        else {
            const filteredValue = userData.filter((row) => {
                return (
                    Object.keys(row).some((key) => {
                        return (
                            row[key].toString().toLowerCase().includes(toLowerCase)
                        )
                    })
                )
            })
            setuserData(filteredValue);
        }
    }

    return (
        <>
            <div className='addUserbg'>
                <div className='addUserBtn ml'>
                    <button type="submit" onClick={() => navigate("/Adduser")} className="btn btn-primary ">Add User</button>
                </div>
                <div>
                    {/* <input type="text" placeholder='Serch User ' className=' serchBarr'/> */}
                    <Serchbar handelChang={handelChang} serchHandel={serchHandel} />
                </div>
                <div className='addUserBtn mr'>
                    <button type="submit" onClick={() => navigate("/login")} className="btn btn-primary ">Login</button>
                </div>
            </div>
            <div className='mainTable'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr.no</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">MobNumber</th>
                            <th scope="col">EditUser</th>
                            <th scope="col">DeleteUser</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider textColor">
                        {userData.map((row, key) => {
                            const srNo = key + 1;
                            return (
                                <tr className='evenColor'>
                                    <th scope="row">{srNo}</th>
                                    <td>{row.firstName}</td>
                                    <td>{row.lastName}</td>
                                    <td>{row.mobNumber}</td>
                                    <td><div><button type="button" onClick={() => navigate(`/edit/${row._id}`)} className="btn btn-success">Edit</button></div></td>
                                    <td><div><button type="button" onClick={() => navigate(`/Delete/${row._id}`)} className="btn btn-danger">Delete</button></div></td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {/* <input type="text" list='sandesh'  placeholder='Select Name'/>
            <datalist id ="sandesh">
                {
                    userData.map((data)=>{
                        return(
                            <select>

                            <option>{data.firstName}</option>
                        
                            </select>

                            
                        )
                    })
                }
            </datalist> */}
        </>
    );
};

export default Home;