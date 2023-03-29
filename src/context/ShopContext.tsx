import { createContext, ReactNode, useState } from "react"

interface ShopContextType {
    handleAddNewProductToOrder: (newElement: UserOrder) => void
    userOrder: UserOrder[]
}

interface UserOrder {
    productId: string;
    quantity: number;
}

interface ShopContextProviderProps {
    children: ReactNode
  }

export const ShopContext = createContext({} as ShopContextType)

export function ShopContextProvider({ children }: ShopContextProviderProps){

    const [userOrder , setUserOrder] = useState<UserOrder[]>([]);

    function handleAddNewProductToOrder(newElement: UserOrder){
        const found = userOrder.find((order) => order.productId === newElement.productId)

        if(!found){
            setUserOrder((state) => {
              return (state = [...userOrder, newElement])})
        } else {
            if (found.quantity + newElement.quantity >= 9) {
              setUserOrder((state) => {
                return state.map((item) => {
                  return item.productId === found.productId ? { ...item, quantity: 9 } : item
                })
              })
            } else {
              setUserOrder((state) => {
                return state.map((item) => {
                  return item.productId === found.productId
                    ? { ...item, quantity: found.quantity + newElement.quantity }
                    : item
                })
              })
          }
        }
    }

    return(
        <ShopContext.Provider value={{handleAddNewProductToOrder, userOrder}}>
            { children }
        </ShopContext.Provider>
    )
}