/*-------------------------------------------------------------------
|  React FC Category
|
|  Purpose:  RENDERS A SINGULAR CATEGORY.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import css from './styles.module.css'
import { ICategory } from '@models/category'
import Image from 'next/image'
import { MdNavigateNext } from 'react-icons/md'
import Link from 'next/link'

interface IProps {
  category: ICategory
}

export const Category: React.FC<IProps> = ({ category }) => {
  const { image, slug, title } = category
  return (
    <Link href={slug}>
      <a className={css.card}>
        <div className={css.image}>
          <Image src={image} alt={title} placeholder="blur" />
        </div>
        <p className={css.title}>{title}</p>
        <div className={css.shop}>
          shop
          <MdNavigateNext />
        </div>
      </a>
    </Link>
  )
}
