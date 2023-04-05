import { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import bagIcon from '../../assets/bagIcon.png'
import Image from 'next/image'
import { DrawerTeste, Wrapper } from './styles'

import { Drawer } from 'antd'

export function MyBag() {
  const { userOrder } = useContext(ShopContext)

  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  // const toggleDrawer = () => {
  //   setOpen((prevState) => !prevState)
  // }

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
        rootClassName="teste"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <button className="ABC">Aperta</button>
      </DrawerTeste>
    </>
  )
}
