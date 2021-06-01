import React from 'react';
import './Label.css';


export default function LabelComponent({ children, style, id, className }) {

    return (
        <p
            id={id ? id : ''}
            className={`form-check-label ${className}`}
            style={style}>
            {children}
        </p>
    )
}

LabelComponent.defaultProps = {
    children: '',
    style: {},
    className: ''
}
