import React from 'react';

const Button = ({styleType, block, ...rest }) => {
    let className = "Button"
    if (styleType) {
        className += ` ${styleType}`
    }
    if (block) {
        className += ` ${block}`
    }
    return (
        // <button className={className} onClick={onClick}>{children}</button>
        <button className={className} {...rest}></button>
    );
};

export default Button;