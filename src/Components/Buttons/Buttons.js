import React from 'react';
import Button from '@mui/material/Button';
import '../Styles/calcStyle.css';

const Buttons = () => {
   
    const populateNumberButtons = () =>{
        const arrayNum = [0,1,2,3,4,5,6,7,8,9];

        return arrayNum.map((numbr) => <Button key={numbr} sx={{
            color: '#EE4421',
            fontSize: '1.5rem'
            }}>{numbr}</Button>);
    };

    const populateoperationButtons = () => {
        const arrayOp = ['.','+','-','×','÷','±','%','00'];

        return arrayOp.map((op) => <Button key={op} sx={{
            color: '#ECF018',
            fontSize: '1.75rem'
            }}>{op}</Button>);
    };

    return(
        <div className="btn-container">     
            {populateNumberButtons()}
            {populateoperationButtons()}
        </div>
    );

};

export default Buttons;