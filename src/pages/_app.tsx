import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '../assets/Logo.svg'
import { ShopContextProvider } from '../context/ShopContext'
import Link from 'next/link'
import { MyBag } from '../components/mybag'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopContextProvider>
      <Container>
        <Header>
          <Link href={`/`}>
            <Image className="Logo" src={logoImg} alt="" />
          </Link>

          <MyBag />
        </Header>

        <Component {...pageProps} />
      </Container>
    </ShopContextProvider>
  )
}
