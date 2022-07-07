import { IAsset } from '@models/asset'
import { IGallery } from '@models/gallery'
import { IIncludes } from '@models/includes'
import { ISuggestion } from '@models/suggestion'

export interface IProduct {
  id: number
  slug: string
  name: string
  shortName: string
  image: IAsset
  category: string
  categoryImage: IAsset
  new: boolean
  price: number
  description: string
  features: string
  includes: IIncludes[]
  gallery: IGallery
  others: ISuggestion[]
}
