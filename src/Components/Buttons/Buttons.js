import React from 'react';
import Button from '@mui/material/Button';
import '../Styles/calcStyle.css';

const Buttons = () => {
   
    const populateNumberButtons = () =>{
        const arrayNum = ['00','0','.','3','2','1','6','5','4','9','8','7'];

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
        const arrayOp = ['+','-','×','÷','±','%','√', 'x²', '𝝅'];

        return arrayOp.map((op) => 
            <Button 
                key={op}
                sx={{
                    fontSize: '1.75rem',
                    backgroundColor:'#014D4E',
                    width:'2.5rem',
                    height:'3.45rem',
                    margin:'0 0 0.5rem 0.5rem'
                }}>
                {op}
            </Button>);
    };

    return(
        <div className="btn-container">
            <div className='right-buttons-container'>
                {populateNumberButtons()}
            </div>
            <div className='op-buttons-container'>
                {populateoperationButtons()}
                <Button 
                  sx={{
                    marginLeft:'0.45em',
                    fontSize: '1.75rem',
                    backgroundColor:'#014D4E',
                    width:'88%',
                    height:'3.4rem'
                  }}>
                  =
                </Button>
            </div>
        </div>
    );

};

export default Buttons;