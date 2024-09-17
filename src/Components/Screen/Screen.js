import React from 'react';
import '../Styles/calcStyle.css';

const Screen = () => {
    return (
        <div className="screen-container">
            <p className="line-mem"> M </p>
            <p className="line-one screen-display"> 0123456789 </p>
            <p className="line-two screen-display"> 0 </p>
        </div>
    );
};

export default Screen;