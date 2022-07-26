import React from 'react';
import './Serchbar.css';

const Serchbar = (props) => {

    return (
        <>
            <input type="text" className='serchBarr' placeholder={props.serchHandel} onChange={(e)=> props.handelChang(e.target.value)} />
        </>
    );
};

export default Serchbar;