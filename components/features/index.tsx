import React from 'react'
import css from './styles.module.css'

interface IProps {
  text: string
}

export const Features: React.FC<IProps> = ({ text }) => {
  return (
    <div className={css.features}>
      <h1 className={css.title}>Features</h1>
      <p className={css.text}>{text}</p>
    </div>
  )
}
