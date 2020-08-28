import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types';
import './Input.css';

export default function Input({ size, ...props }) {
    return (
        <input type="text" className={clsx('input', size)} {...props} />
    )
}

Input.defaultProps = {
    size: "small"
}

Input.prototype = {
    size: PropTypes.string.isRequired
}