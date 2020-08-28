import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ label, onClick, varient, ...props }) {
    return <button onClick={onClick} className={clsx('btn', varient)} {...props} >{label}</button>
}
Button.defaultProps = {
    varient: "primary",
    label: "Button"
}
Button.prototype = {
    label: PropTypes.string.isRequired,
    varient: PropTypes.string.isRequired
}