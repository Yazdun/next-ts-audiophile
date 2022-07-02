import { BsEarbuds } from 'react-icons/bs'
import { RiHome2Fill } from 'react-icons/ri'
import { IoHeadset } from 'react-icons/io5'
import { BsSpeakerFill } from 'react-icons/bs'

export const routes = [
  {
    title: 'home',
    slug: '/',
    Icon: RiHome2Fill,
  },
  {
    title: 'headphones',
    slug: '/category/headphones',
    Icon: IoHeadset,
  },
  {
    title: 'speakers',
    slug: '/category/speakers',
    Icon: BsSpeakerFill,
  },
  {
    title: 'earphones',
    slug: '/category/earphones',
    desc: '',
    Icon: BsEarbuds,
  },
]
