import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    // gap: '3rem',
    width: '100%',
    marginLeft: 'auto',
    minHeight: 500,
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2)) '
})

export const Product = styled('div', {
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    // padding: '0.25rem ',
    position: 'relative',

    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '1.25rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgb(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        ".InfoProduct": {
            display: 'flex',
            flexDirection: 'column',

            strong: { 
                fontSize: '$md',
                color: '$gray100',
            },
    
            span: {
                fontSize: '$md',
                fontWeight: 'bold',
                color: '$green300',
                marginTop: '0.25rem',
            },
        },

        ".AddToBag": {
            transition: '0.25s ease',
            opacity:0.5,

            '&:hover': {
                transform: 'scale(1.1)',
                transition: '0.25s ease',
                opacity:1,
            },
        },

        
        
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        },
    },
})