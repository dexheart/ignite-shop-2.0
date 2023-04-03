import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import Link from "next/link"

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Head from "next/head";
import { stripe } from "../lib/stripe";

import Bag from '../assets/Bag.png'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}


export default function Home({ products }: HomeProps) {
  console.log("..")

  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>



      <HomeContainer ref={sliderRef} className='keen-slider' >
        
        {products.map(product => {

          return(

            <Product key={product.id}  className='keen-slider__slide'>
                <Image src={product.imageUrl} width={520} height={380} alt={""} /> 

                <footer>
                  <div className="InfoProduct">
                    <strong>{product.name}</strong>
                    <span>R$ {(product.price / 100).toFixed(2)}</span>
                  </div>

                  <div className="AddToBag">

                    <Link  href={`/product/${product.id}`} prefetch={ false } >
                      <Image src={Bag} width={40} height={40} alt="" />
                    </Link>  
                  </div>
                </footer>

              </Product>

            
            
          )
        })}

        

      </HomeContainer>
    
    </>
    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }

}