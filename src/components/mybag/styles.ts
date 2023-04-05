import { styled } from '../../styles'
import { Drawer } from 'antd'

export const Wrapper = styled('div', {
  display: 'flex',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(150%)',
  },

  '.Bag': {
    width: '3rem',
    height: '3rem',
    background: '$gray800',
    borderRadius: 6,
    padding: '0.75rem',

    display: 'flex',
    alignItems: 'center',
  },

  '.NumberOfItens': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    gap: '2rem',

    width: '1.5rem',
    height: '1.5rem',

    marginLeft: '-1.25rem',
    marginTop: '-0.25rem',

    background: '$green500',

    border: '3px solid $gray900',
    borderRadius: 1000,

    span: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '0.8rem',
      /* or 22px */

      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',

      /* Grayscale/White */

      color: '$gray100',
    },
  },
})

// <div class="ant-drawer-content-wrapper" style="width: 378px;"><div class="ant-drawer-content" aria-modal="true" role="dialog"><div class="ant-drawer-wrapper-body"><div class="ant-drawer-header ant-drawer-header-close-only"><div class="ant-drawer-header-title"><button type="button" aria-label="Close" class="ant-drawer-close"><span role="img" aria-label="close" class="anticon anticon-close"><svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span></button></div></div><div class="ant-drawer-body"><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p></div></div></div></div>

export const DrawerTeste = styled(Drawer, {
  background: '$gray900 !important',
  '.ant-drawer-wrapper-body': {
    '.ant-drawer-header': {
      borderBottom: 0,
      '.ant-drawer-header-title': {
        display: 'flex',
        flexDirection: 'row-reverse',
        button: {
          color: '$gray300',
          boderRadius: 8,
        },
      },
    },

    '.ant-drawer-body': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '160%',

      /* Grayscale/Title */

      color: '$gray100',
    },
  },
})
