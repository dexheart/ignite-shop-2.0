import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app';
import type { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '../assets/Logo.svg'
import { ShopContextProvider } from '../context/ShopContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <>
        <ShopContextProvider>
          <Component {...pageProps} />
        </ShopContextProvider>
      </>
      
    </Container>
  )
}
