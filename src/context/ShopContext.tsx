import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

export interface UserOrder {
  id: string
  quantity: number
  imageUrl: string
  price: number
  name: string
  priceId: string
}

interface ShopContextType {
  isCreatingCheckoutSession: boolean
  handleBuyProduct: () => void
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

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

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

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        userOrder,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com ferramente de Observalidade para identificar o erro exato

      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <ShopContext.Provider
      value={{
        handleBuyProduct,
        handleRemoveProductToOrder,
        handleAddNewProductToOrder,
        userOrder,
        isCreatingCheckoutSession,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
