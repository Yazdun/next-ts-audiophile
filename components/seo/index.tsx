/*-------------------------------------------------------------------
|  React FC SEO
|
|  Purpose:  REUSABLE SEO COMPONENT FOR USING IN PROJECT'S PAGES
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { NextSeo } from 'next-seo'
import { DEFAULT_DESC_META_TAG, RENDER_TITLE_META_TAG } from '@constants/index'

interface IProps {
  title?: string
  desc?: string
}

export const SEO: React.FC<IProps> = ({ title = '', desc = '' }) => {
  return (
    <NextSeo
      title={RENDER_TITLE_META_TAG(title)}
      description={desc ? desc : DEFAULT_DESC_META_TAG}
      additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      openGraph={{
        url: `https://https://femgalleria.vercel.app`,
        title: title,
        description: desc,
        locale: 'en_us',
        images: [
          {
            url: 'https://res.cloudinary.com/dakts9ect/image/upload/v1657600692/sideprojects/Untitled-1_ym5obf.jpg',
            width: 1200,
            height: 630,
            alt: title,
            type: 'image/jpeg',
          },
        ],
        site_name: 'AudioPhile',
      }}
      twitter={{
        handle: '@Yazdun',
        site: '@Yazdun',
        cardType: 'summary_large_image',
      }}
    />
  )
}
