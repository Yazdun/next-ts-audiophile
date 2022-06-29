export interface IProduct {
  id: number
  slug: string
  name: string
  image: object
  category: string
  categoryImage: string
  new: boolean
  price: number
  description: string
  features: string
  includes: object[]
  gallery: object
  others: object[]
}
