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
                    margin:'0 0 0.6rem 0.6rem',
                    border: 'solid transparent',
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
                    },
                    '&:after': {
                        backgroundClip: 'padding-box',
                        backgroundColor: '#40e0d0',
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
                    backgroundColor:'#314D1D',
                    border: 'solid transparent',
                    borderRadius: '16px',
                    borderWidth: '0 0 4px',
                    boxSizing: 'border-box',
                    width:'2.5rem',
                    height:'3.45rem',
                    margin:'0 0 0.5rem 0.5rem',
                    transition: 'filter 2s',
                    '&:hover': {
                        boxShadow: '0 0 10px #9ecaed',
                        background: '#91A91F',
                    },
                    '&:active': {
                        borderWidth: '4px 0 0',
                        background: '#91A91F',
                    },
                    '&:after': {
                        backgroundClip: 'padding-box',
                        backgroundColor: '#91A91F',
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
                    border: 'solid transparent',
                    borderRadius: '16px',
                    borderWidth: '0 0 4px',
                    boxSizing: 'border-box',
                    fontSize: '1.75rem',                    
                    marginLeft:'0.45em',                  
                    transition: 'filter 2s',
                    width:'88%',
                    height:'3.4rem',
                    transform: 'translateZ(0)',
                    '&:hover': {
                        boxShadow: '0 0 10px #9ecaed',
                        background: '#91A91F',
                    },
                    '&:active': {
                        borderWidth: '4px 0 0',
                        background: '#91A91F',
                    },
                    '&:after': {
                        backgroundClip: 'padding-box',
                        backgroundColor: '#91A91F',
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
                  =
                </Button>
            </div>
        </div>
    );

};

export default Buttons;