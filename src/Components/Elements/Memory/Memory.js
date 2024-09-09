import React from 'react';
import Button from '@mui/material/Button';

const Memory = () => {

    const setBtnValue = (mem) => {
        console.log("Inside");
    };

    const populateMemButtons = () =>{
        const arrayMem = ['MR','M+','M-','CLS','CE'];

        return arrayMem.map((mem) => 
            <Button 
                key={mem} 
                onClick={setBtnValue(mem)} 
                sx={{
                    color: '#00A86B',
                    fontSize: '1.5rem',
                    backgroundColor:'#7A5000',
                    margin:'0 0 0.8rem 0.5rem'
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