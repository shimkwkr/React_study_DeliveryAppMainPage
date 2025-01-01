import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({ children, backUrl}) => {

    if (!backUrl) {
        return (
            <h1>{children}</h1>
        )
    } else {
        return (
            <>
                <Link to={backUrl}></Link>
                <h1>{children}</h1>
            </>
        );

    }

};

export default Title;