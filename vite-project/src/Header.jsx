import React from 'react';

const Header = ({title}) => {
    return (
        <div>
            <h1 className= "p-4 text-center font-bold">{title}</h1>
        </div>
    );
};

export default Header;