import React from 'react';
import Button from '@mui/material/Button';

const Memory = () => {

    const setBtnValue = (mem) => {
    };

    const populateMemButtons = () =>{
        const arrayMem = ['MR','M+','M-','CLS','CE'];

        return arrayMem.map((mem) => 
            <Button 
                key={mem} 
                onClick={setBtnValue(mem)} 
                sx={{
                    color: '#592720',
                    fontSize: '1.5rem',
                    background:'#A32638',
                    border: 'solid transparent',
                    borderRadius: '16px',
                    borderWidth: '0 0 4px',
                    boxSizing: 'border-box',
                    margin:'0 0 0.8rem 0.5rem',
                    transition: 'filter 2s',
                    '&:hover': {
                        boxShadow: '0 0 10px #9ecaed',
                        background: '#DDADAF',
                    },
                    '&:active': {
                        borderWidth: '4px 0 0',
                        background: '#DDADAF',
                    },
                    '&:after': {
                        backgroundClip: 'padding-box',
                        backgroundColor: '#DDADAF',
                        border: 'solid transparent',
                        borderRadius: '16px',
                        borderWidth: '0 0 4px',
                        bottom: '-4px',
                        left: '0',
                        position: 'absolute',
                        right: '0',
                        top: '0',
                        zIndex: '-1'
                    }
                    }}>
            {mem}
            </Button>);
    };

    return (
        <div>
            {populateMemButtons()}
        </div>
    );
};

export default Memory;