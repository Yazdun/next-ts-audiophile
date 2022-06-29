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
  includes: object[]
  gallery: IGallery
  others: object[]
}

interface IAsset {
  mobile: string
  tablet: string
  desktop: string
}

interface IGallery {
  first: IAsset
  second: IAsset
  third: IAsset
}
