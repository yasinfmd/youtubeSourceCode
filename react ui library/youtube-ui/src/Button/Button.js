import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.module.css'
const Button = ({ text, onClick, variant, size }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.youtubeButton} ${styles[variant]} ${styles[size]}`}
    >
      {' '}
      {text}
    </button>
  )
}
Button.defaultProps = {
  text: 'Click Me !',
  variant: 'success',
  size: 'm'
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['m', 's', 'l']),
  variant: PropTypes.oneOf([
    'success',
    'primary',
    'danger',
    'secondary',
    'dark'
  ])
}
export default Button
