import React from 'react';
import './Input.css';


export default function InputComponent({
    id,
    className,
    label,
    value,
    onChange,
    placeholder,
    type,
    helpText,
    required,
    ref,
    ...otherProps
}) {
    return (
        <React.Fragment>
            <div className={`form-input-container ${className}`}>
                {label ? (<label htmlFor={id} className={`form-label ${className}`}>{label}</label>) : null}
                <input
                    type={type}
                    className={`form-control ${className}`}
                    id={id}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={onChange}
                    ref={ref}
                    {...otherProps} />
                {helpText ? (<div className={`form-text ${className}`}>{helpText}</div>) : null}

            </div>
        </React.Fragment>
    )
}

InputComponent.defaultProps = {
    id: '',
    className: '',
    label: undefined,
    value: '',
    onChange: () => { },
    placeholder: '',
    helpText: undefined,
    required: false,
}

