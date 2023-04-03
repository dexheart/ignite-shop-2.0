import { createContext, ReactNode, useState } from "react"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'



interface ShopContextType {
    handleAddNewProductToOrder: (newElement: UserOrder) => void
    userOrder: UserOrder[]
}

export interface UserOrder {
    id: string;
    quantity: number;
}

interface ShopContextProviderProps {
    children: ReactNode
  }

export const ShopContext = createContext({} as ShopContextType)

export function ShopContextProvider({ children }: ShopContextProviderProps){

    const [userOrder , setUserOrder] = useState<UserOrder[]>([]);

    const notifySuccess = () =>
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

    function handleAddNewProductToOrder(newElement: UserOrder){
        const found = userOrder.find((order) => order.id === newElement.id)

        if(!found){
          setUserOrder((state) => {
            return (state = [...userOrder, newElement])})
          notifySuccess()
        } else{
          notifyWarning()
        }
    }
    

    return(
        <ShopContext.Provider value={{handleAddNewProductToOrder, userOrder}}>
            { children }
        </ShopContext.Provider>
    )
}

