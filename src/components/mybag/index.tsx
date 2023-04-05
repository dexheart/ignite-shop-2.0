import { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import bagIcon from '../../assets/bagIcon.png'
import Image from 'next/image'
import { DrawerTeste, Wrapper } from './styles'
import { HomeProps } from '../../pages'

// import './drawer.module.css'
// import { Drawer } from 'antd'

export function MyBag({ products }: HomeProps) {
  const { userOrder } = useContext(ShopContext)

  const [open, setOpen] = useState(false)

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
        <h2>Sacola de compras</h2>

        <div></div>
      </DrawerTeste>
    </>
  )
}
