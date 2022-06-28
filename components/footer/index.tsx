import { project_logo } from '@assets/shared/desktop'
import { routes } from '@utils/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import css from './styles.module.css'
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si'

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.line}></div>
        <div className={css.top}>
          <Image src={project_logo} alt="audiophile" />
          <ul className={css.routes}>
            {routes.map(route => {
              return (
                <li key={route.title}>
                  <Link href={route.slug}>
                    <a>{route.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <p className={css.info}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className={css.bottom}>
          <p className={css.cp}>Copyright {year}. All Rights Reserved</p>
          <ul className={css.socials}>
            {socials.map(soc => {
              return (
                <li key={soc.title}>
                  <a href={soc.href} target="_blank" title={soc.title}>
                    {soc.icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}

const socials = [
  {
    title: 'facebook',
    href: 'https://www.facebook.com/',
    icon: <SiFacebook />,
  },
  {
    title: 'twitter',
    href: 'https://twitter.com/Yazdun',
    icon: <SiTwitter />,
  },
  {
    title: 'instagram',
    href: 'https://www.instagram.com/',
    icon: <SiInstagram />,
  },
]
