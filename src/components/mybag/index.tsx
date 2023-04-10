import { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import bagIcon from '../../assets/bagIcon.png'
import Image from 'next/image'
import { DrawerTeste, Wrapper } from './styles'
import { HomeProps } from '../../pages'

// import './drawer.module.css'
// import { Drawer } from 'antd'

export function MyBag({ products }: HomeProps) {
  const {
    userOrder,
    handleRemoveProductToOrder,
    isCreatingCheckoutSession,
    handleBuyProduct,
  } = useContext(ShopContext)

  const [open, setOpen] = useState(false)

  const isEmpty = userOrder.length === 0

  const totalPrice = userOrder.reduce((acc, item) => {
    // eslint-disable-next-line prettier/prettier
    acc = acc + (item.price / 100 )
    return acc
  }, 0)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Wrapper onClick={showDrawer}>
        <div className="Bag">
          <Image src={bagIcon} alt="" width={25} height={25} />
        </div>

        {userOrder.length > 0 ? (
          <div className="NumberOfItens">
            <span>{userOrder.length}</span>
          </div>
        ) : null}
      </Wrapper>

      <DrawerTeste
        className="teste"
        rootClassName="teste"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="MainContainer">
          <h2 className="Title">Sacola de compras</h2>

          <div className="Wrapper">
            {userOrder.length !== 0 ? (
              userOrder.map((item) => {
                return (
                  <div key={item.id} className="ItemList">
                    <div className="ImageContainer">
                      <Image
                        src={item.imageUrl}
                        width={70}
                        height={70}
                        alt=""
                      />
                    </div>

                    <div className="ItemFeatures">
                      <span className="Name">{item.name}</span>
                      <span className="Price">
                        R$ {(item.price / 100).toFixed(2)}
                      </span>
                      <span
                        onClick={() => handleRemoveProductToOrder(item.id)}
                        className="RemoveButton"
                      >
                        Remover
                      </span>
                    </div>
                  </div>
                )
              })
            ) : (
              <span className="EmptyBag">Sacola Vazia</span>
            )}
          </div>
        </div>

        <div className="BuyingContainer">
          <div className="QuantityContainer">
            <span>Quantidade</span>
            <span>{userOrder.length} itens</span>
          </div>
          <div className="PriceConteiner">
            <span>Valor total</span>
            <span>R$ {totalPrice.toFixed(2)} </span>
          </div>

          <div className="ButtonContainer">
            <button
              disabled={isEmpty || isCreatingCheckoutSession}
              onClick={handleBuyProduct}
            >
              <span>Finalizar compra</span>
            </button>
          </div>
        </div>
      </DrawerTeste>
    </>
  )
}
