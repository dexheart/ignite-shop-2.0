import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',

})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    

    ".Logo":{
        transition: '0.25s ease',
        opacity:0.6,

        '&:hover': {
            transform: 'scale(1.1)',
            transition: '0.25s ease',
            opacity:1,
        },
    },

    ".Bag": {
        width: '3rem',
        height: '3rem',
        background: '$gray800',
        borderRadius: 6,
        padding: '0.75rem',

        display: 'flex',
        alignItems: 'center',
        
    }
    
})