import { ICartItem } from '@models/cart'
import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

interface IProps {
  children: React.ReactNode
}

const CartContext = createContext<any>(null)

export const CartProvider: React.FC<IProps> = ({ children }) => {
  const [cart, setCart] = useLocalStorage<ICartItem[] | null>('cart', null)

  const updateCart = (id: number, isDecrease?: boolean) => {
    const isExist = cart?.find((item: ICartItem) => item.id === id)
    if (!isExist) {
      return false
    }
    return cart?.map(obj => {
      if (obj.id === id) {
        return {
          ...obj,
          quantity: isDecrease ? isExist.quantity - 1 : isExist.quantity + 1,
        }
      }
      return obj
    })
  }

  const decrease = (id: number) => {
    const newCart = updateCart(id, true)

    if (newCart) {
      setCart(newCart)
    } else {
      const product = { quantity: 1, id: id }
      setCart(prev => (prev ? [...prev, product] : [product]))
    }
  }

  const increase = (id: number) => {
    const newCart = updateCart(id)

    if (newCart) {
      setCart(newCart)
    } else {
      const product = { quantity: 1, id: id }
      setCart(prev => (prev ? [...prev, product] : [product]))
    }
  }

  return (
    <CartContext.Provider value={{ cart, increase, decrease }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
