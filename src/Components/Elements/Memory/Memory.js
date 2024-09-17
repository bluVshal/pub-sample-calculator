import React, { useReducer, useState } from 'react';
import Button from '@mui/material/Button';

const Memory = () => {

    const [mem, setMem] = useState('');

    const setBtnValue = () => {
      //  setMem('M')
    };

    const populateMemButtons = () =>{
        const arrayMem = ['MR','M+','M-','CLS','CE'];

        return arrayMem.map((mem) => 
            <Button 
                key={mem} 
                onClick={setBtnValue()} 
                sx={{
                    color: '#b2beb5',
                    fontSize: '1.5rem',
                    fontFamily: "'Urbanist', system-ui",
                    backgroundColor:'#A32638',
                    border: 'solid',
                    borderRadius: '16px',
                    borderWidth: '0 0 4px',
                    boxSizing: 'border-box',
                    margin:'0 0 0.8rem 0.5rem',
                    transition: 'filter 2s',
                    '&:hover': {
                        boxShadow: '0 0 10px #9ecaed',
                        backgroundColor: '#DDADAF',
                        color: '#555555',
                    },
                    '&:active': {
                        borderWidth: '0 0 0',
                        backgroundColor: '#DDADAF',
                        transform: 'translateY(4)'
                    }
                    }}>
            {mem}
            </Button>);
    };

    return (
        <div className="mem-container">
            {populateMemButtons()}
        </div>
    );
};

export default Memory;