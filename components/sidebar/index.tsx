import React from 'react'
import css from './styles.module.css'

interface IProps {
  fn: any
}

export const Sidebar: React.FC<IProps> = ({ fn }) => {
  return (
    <div className={css.container}>
      <div className={css.sidebar}>
        <button onClick={fn}>close</button>
        <h1>sidebar</h1>
      </div>
    </div>
  )
}
