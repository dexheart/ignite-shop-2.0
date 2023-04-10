import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Stripe from 'stripe'
import { ShopContext, UserOrder } from '../../context/ShopContext'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { handleAddNewProductToOrder } = useContext(ShopContext)

  const newProduct: UserOrder = {
    id: product.id,
    quantity: 1,
    imageUrl: product.imageUrl,
    price: product.price,
    name: product.name,
    priceId: product.defaultPriceId,
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt={''} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>R$ {(product.price / 100).toFixed(2)}</span>

          <p>{product.description}</p>

          <button
            className="ButtonAddToBag"
            // onClick={handleBuyProduct}>
            onClick={() => handleAddNewProductToOrder(newProduct)}
          >
            Colocar na sacola
          </button>
          <ToastContainer />
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_Na3mmxwR9zqqmD' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params?.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
