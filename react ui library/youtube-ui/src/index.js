import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { default as YoutubeButton } from './Button/Button'
export { default as YoutubeInput } from './Input/Input'
