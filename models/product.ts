import { IAsset } from '@models/asset'
import { IGallery } from '@models/gallery'
import { IIncludes } from '@models/includes'

export interface IProduct {
  id: number
  slug: string
  name: string
  image: IAsset
  category: string
  categoryImage: IAsset
  new: boolean
  price: number
  description: string
  features: string
  includes: IIncludes[]
  gallery: IGallery
  others: object[]
}
