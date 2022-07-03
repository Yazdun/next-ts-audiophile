import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

interface ICartItem {
  productId: number
  quantity: string
}

interface IProps {
  children: React.ReactNode
}

interface IContext {
  cart: ICartItem[] | null
  setCart: any
}

const CartContext = createContext<IContext | null>(null)

export const CartProvider: React.FC<IProps> = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', null)

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
