import { shared_assets_desktop } from '@assets/index'
import { ICategory } from '@models/category'

export const categories: ICategory[] = [
  {
    title: 'headphones',
    slug: 'headphones',
    image: shared_assets_desktop.image_category_thumbnail_headphones,
  },
  {
    title: 'speakers',
    slug: 'speakers',
    image: shared_assets_desktop.image_category_thumbnail_speakers,
  },
  {
    title: 'earphones',
    slug: 'earphones',
    image: shared_assets_desktop.image_category_thumbnail_earphones,
  },
]
