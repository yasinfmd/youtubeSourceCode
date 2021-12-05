import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.module.css'
const Input = ({ value, onChange, className, id, placeholder, size }) => {
  return (
    <input
      id={id}
      value={value}
      placeholder={placeholder}
      className={`${className} ${styles.youtubeInput} ${styles[size]}`}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
Input.defaultProps = {
  value: '',
  onChange: () => null,
  className: '',
  id: 'default_input',
  placeholder: '...',
  size: 'm'
}

Input.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string
}
export default Input
