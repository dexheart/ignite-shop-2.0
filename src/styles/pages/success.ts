import { styled } from '..'

export const SucessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 456,

  h1: {
    marginTop: '2rem',
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,

    strong: {
      textTransform: 'capitalize',
    },
  },

  a: {
    marginTop: '2rem',
    display: 'block',

    fontSize: '$lg',
    color: '$green500',

    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green500',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius: 1000,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '-1rem',
  marginRight: '-1rem',

  img: {
    objectFit: 'cover',
  },
})

export const WrapperImagesOfItens = styled('div', {
  display: 'flex',
})
