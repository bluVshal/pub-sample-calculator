import React from 'react';
import Button from '@mui/material/Button';
import '../Styles/calcStyle.css';

const Buttons = () => {
   
    const populateNumberButtons = () =>{
        const arrayNum = ['.','00','0','3','2','1','6','5','4','9','8','7'];

        return arrayNum.reverse().map((numbr) => 
            <Button 
                key={numbr}
                sx={{
                    fontSize: '1.5rem',                    
                    backgroundColor:'#014D4E',
                    margin:'0 0 0.6rem 0.6rem'
                }}>
                {numbr}
            </Button>);
    };

    const populateoperationButtons = () => {
        const arrayOp = ['+','-','×','÷','±','%','√'];

        return arrayOp.map((op) => 
            <Button 
                key={op}
                sx={{
                    fontSize: '1.5rem',
                    backgroundColor:'#014D4E',
                    margin:'0 0 0.6rem 0.6rem'
                }}>
                {op}
            </Button>);
    };

    return(
        <div className="btn-container">
            <div className='right-buttons'>
                {populateNumberButtons()}
            </div>
            <div className='op-buttons'>
                {populateoperationButtons()}
            </div>
        </div>
    );

};

export default Buttons;