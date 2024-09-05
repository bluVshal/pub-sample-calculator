import React from 'react';

import Buttons from '../Buttons/Buttons';
import Screen from '../Screen/Screen';
import Memory from '../Elements/Memory/Memory';

const Assemble = () => {
    return(
        <div>
            <p>Assembled calculator will be here</p>
            <Screen />
            <Memory />
            <Buttons />
        </div>
    );
};

export default Assemble;