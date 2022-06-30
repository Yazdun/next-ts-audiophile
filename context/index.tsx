import { createContext, useContext } from 'react'

interface AppContextInterface {
  name: string
  author: string
  url: string
}

interface IProps {
  children: React.ReactNode
}

const CartContext = createContext<AppContextInterface | null>(null)

const sampleAppContext: AppContextInterface = {
  name: 'Using React Context in a Typescript App',
  author: 'thehappybug',
  url: 'http://www.example.com',
}

export const CartProvider: React.FC<IProps> = ({ children }) => (
  <CartContext.Provider value={sampleAppContext}>
    {children}
  </CartContext.Provider>
)

export function useCart() {
  return useContext(CartContext)
}
