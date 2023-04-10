import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface UserOrder {
  id: string
  quantity: number
  imageUrl: string
  price: number
  name: string
}

interface ShopContextType {
  handleRemoveProductToOrder: (elementId: string) => void
  handleAddNewProductToOrder: (newElement: UserOrder) => void
  userOrder: UserOrder[]
}

interface ShopContextProviderProps {
  children: ReactNode
}

export const ShopContext = createContext({} as ShopContextType)

export function ShopContextProvider({ children }: ShopContextProviderProps) {
  const [userOrder, setUserOrder] = useState<UserOrder[]>([])

  const notifySuccessAdd = () =>
    toast.success('Camisa adicionada à sacola.', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })

  const notifySuccessRemoved = () =>
    toast.success('Camisa removida da sacola com sucesso.', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })

  const notifyWarning = () =>
    toast.warning('Quantidade máxima suportada por produto: 1.', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })

  function handleAddNewProductToOrder(newElement: UserOrder) {
    const found = userOrder.find((order) => order.id === newElement.id)

    if (!found) {
      setUserOrder((state) => {
        return (state = [...userOrder, newElement])
      })
      notifySuccessAdd()
    } else {
      notifyWarning()
    }
  }

  function handleRemoveProductToOrder(elementID: string) {
    setUserOrder((state) =>
      state.filter((item) => {
        return item.id !== elementID
      }),
    )
    notifySuccessRemoved()
  }

  return (
    <ShopContext.Provider
      value={{
        handleRemoveProductToOrder,
        handleAddNewProductToOrder,
        userOrder,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
