import React from 'react';
import Button from '@mui/material/Button';

const Buttons = () => {
   
    const populateButtons = () =>{
        const arrayNum = [1,2,3,4,5,6,7,8,9,0];

        return arrayNum.map((key, numbr) => <Button className="btn-num" key={key}>{numbr}</Button>);
    };

    return(
        <div>     
            {populateButtons()}       
        </div>
    );

};

export default Buttons;