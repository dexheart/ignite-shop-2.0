import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app';
import type { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '../assets/Logo.svg'
import bagIcon from '../assets/bagIcon.png'
import { ShopContextProvider } from '../context/ShopContext';
import Link from 'next/link';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  

  return (
    <Container>
      <Header>
        <Link href={`/`} >
          <Image className='Logo' src={logoImg} alt="" />
        </Link>

        <div className='Bag'>
          <Image src={bagIcon} alt="" width={25} height={25} />
        </div>
      </Header>

      <>
        <ShopContextProvider>
          <Component {...pageProps} />
        </ShopContextProvider>
      </>
      
    </Container>
  )
}
