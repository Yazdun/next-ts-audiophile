import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

interface ICartItem {
  productId: number
  quantity: string
}

interface IProps {
  children: React.ReactNode
}

const CartContext = createContext<ICartItem | null>(null)

const sampleAppContext: ICartItem = {
  productId: 1,
  quantity: 'thehappybug',
}

export const CartProvider: React.FC<IProps> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<ICartItem>('cart', sampleAppContext)
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
