import PropTypes from 'prop-types';
import React from 'react';
import './Button.css';


const Button = ({ children, type, className, ...otherprops }) => {

  return (
    <button
      type='button'
      className={`btn ${type} button-component ${className}`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
};

Button.defaultProps = {
  type: 'btn-light',
  children: 'Button',
};

export default React.memo(Button);
