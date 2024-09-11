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
                    fontFamily: "'Urbanist', system-ui",               
                    backgroundColor:'#014D4E',
                    margin:'0 0 0.6rem 0.6rem',
                    border: 'solid',
                    borderRadius: '16px',
                    borderWidth: '0 0 4px',
                    boxSizing: 'border-box',
                    transition: 'filter 2s',
                    '&:hover': {
                        boxShadow: '0 0 10px #9ecaed',
                        background: '#40e0d0',
                    },
                    '&:active': {
                        borderWidth: '4px 0 0',
                        background: '#40e0d0',
                    }
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
                    fontFamily: "'Urbanist', system-ui",
                    backgroundColor:'#314D1D',
                    border: 'solid',
                    borderRadius: '16px',
                    borderWidth: '0 0 4px',
                    boxSizing: 'border-box',
                    width:'2.5rem',
                    height:'3.65rem',
                    margin:'0 0 0.6rem 0.5rem',
                    transition: 'filter 2s',
                    '&:hover': {
                        boxShadow: '0 0 10px #9ecaed',
                        background: '#91A91F',
                    },
                    '&:active': {
                        borderWidth: '4px 0 0',
                        background: '#91A91F',
                    }
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
                    backgroundColor:'#648C11',
                    border: 'solid',
                    borderRadius: '16px',
                    borderWidth: '0 0 4px',
                    boxSizing: 'border-box',
                    fontSize: '1.75rem',
                    fontFamily: "'Urbanist', system-ui",
                    marginLeft:'0.45em',                  
                    transition: 'filter 2s',
                    width:'13rem',
                    height:'3.4rem',
                    outline: 'none',
                    '&:hover': {
                        boxShadow: '0 0 10px #9ecaed',
                        background: '#91A91F',
                    },
                    '&:active': {
                        borderWidth: '4px 0 0',
                        background: '#91A91F',                        
                        transform: 'translateY(0)',
                    }
                  }}>
                  =
                </Button>
            </div>
        </div>
    );

};

export default Buttons;