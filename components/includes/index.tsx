import React from 'react'
import { IIncludes } from '@models/includes'
import css from './styles.module.css'

interface IProps {
  includes: IIncludes[]
}

export const Includes: React.FC<IProps> = ({ includes }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>in the box</h2>
    </div>
  )
}
