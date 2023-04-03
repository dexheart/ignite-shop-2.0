import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"


export function MyBag(){
    const {userOrder} = useContext(ShopContext)
    
    return(
        <>
            {userOrder.length>0 ? (
            <div className='NumberOfItens'>
              <span>{userOrder.length}</span>
            </div> )
            : null}
        </>
    )
}