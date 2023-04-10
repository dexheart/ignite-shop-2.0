import { stripe } from '../lib/stripe'
import {
  ImageContainer,
  SucessContainer,
  WrapperImagesOfItens,
} from '../styles/pages/success'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Stripe } from 'stripe'

interface SuccessProps {
  customerName: string

  products: {
    nameItem: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SucessContainer>
        <WrapperImagesOfItens>
          {products.map((product) => {
            return (
              <ImageContainer key={product.nameItem}>
                <Image src={product.imageUrl} alt="" width={120} height={110} />
              </ImageContainer>
            )
          })}
        </WrapperImagesOfItens>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName.toLowerCase()}</strong>, sua compra de{' '}
          {products.length} camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SucessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  params,
}) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const products = session.line_items.data.map((item) => {
    const temp = item.price.product as Stripe.Product

    return {
      nameItem: temp.name,
      imageUrl: temp.images[0],
    }
  })

  // const products = session.line_items.data[0].price.product as Stripe.Product

  console.log(products)
  console.log(customerName)

  return {
    props: {
      customerName,
      products,
    },
  }
}
