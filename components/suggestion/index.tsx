/*-------------------------------------------------------------------
|  React FC Suggestion
|
|  Purpose: RENDERS THE OTHER PRODUCT'S SUGGESTION ON THE PRODUCT'S PAGE
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { ISuggestion } from '@models/suggestion'
import css from './styles.module.css'
import Image from 'next/image'
import { Button } from '@components/index'
import { useWindowSize } from '@hooks/useWindowSize'

interface IProps {
  suggestion: ISuggestion
}

export const Suggestion: React.FC<IProps> = ({ suggestion }) => {
  const { isTouch } = useWindowSize()
  return (
    <li className={css.item}>
      <div className={css.image}>
        <Image
          src={isTouch ? suggestion.image.mobile : suggestion.image.desktop}
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <h3 className={css.title}>{suggestion.name}</h3>
      <Button href={`/product/${suggestion.slug}`} maxwidth={120}>
        see product
      </Button>
    </li>
  )
}
