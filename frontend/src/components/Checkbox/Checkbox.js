import React from 'react';
import './Checkbox.css';

export default function Checkbox({
    id,
    name,
    value,
    checked,
    onChange,
    children,
    disabled,
    classes,
    styles,
    ...otherprops }) {

    let containerClassName = classes && classes.container ? `form-check ${classes.container}` : 'form-check';
    let inputClassName = classes && classes.input ? `form-check-input ${classes.input}` : 'form-check-input';
    let labelClassName = classes && classes.label ? `form-check-label ${classes.label}` : 'form-check-label';

    return (
        <div
            className={containerClassName}
            style={styles && styles.container ? styles.container : {}}>
            <input
                id={id}
                // className={inputClassName}
                className={`checkbox-input ${inputClassName}`}
                type="checkbox"
                name={name}
                value={value}
                disabled={disabled}
                onChange={onChange}
                checked={checked}
                style={styles && styles.input ? styles.input : {}}
                {...otherprops} />
            <label
                className={labelClassName}
                htmlFor={id}
                style={styles && styles.label ? styles.label : {}}>
                {children}
            </label>
        </div>
    )
}

Checkbox.defaultProps = {
    id: '',
    children: 'Checkbox',
    options: [],
    name: '',
    value: '',
    onChange: () => { },
    classes: { label: '', input: '', container: '' },
    styles: { label: {}, input: {}, container: {} }
}
