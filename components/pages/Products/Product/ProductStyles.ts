import { SxProps } from '@mui/material'

export const ProductsItemWrapper: SxProps = {
  backgroundColor: '#F6F9FC',
  flexGrow: 1,
  pt: '64px',
  pb: 4,
}

export const ProductsItemHeader: SxProps = {
  display: 'flex',
  mb: 3,
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
}

export const ProductsItemImagesBox: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: {
    xs: '100%',
    md: '50%',
  },
  minHeight: {
    xs: 'calc(100vh - 48px)',
    md: 'unset',
  },
  padding: {
    xs: '0',
    md: '24px 0 0 24px',
  },
  textAlign: 'center',
}

export const ProductsItemBigImagesBox: SxProps = {
  mb: {
    xs: '0',
    md: 6,
  },
  flex: '8',
  display: 'flex',
  alignItems: 'center',
}

export const ProductsItemSmallImagesBox: SxProps = {
  display: 'flex',
  gap: '15px',
  flex: '2',
  justifyContent: 'center',
  '.swiper-slide-thumb-active > div': {
    borderColor: '#4bb4b4',
  },

  '.swiper-wrapper': {
    width: '250px',
  },
}

export const ProductsItemSmallImage: SxProps = {
  height: '64px',
  width: '64px',
  borderRadius: '10px',
  border: 1,
  borderColor: 'rgb(218, 225, 231)',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}

export const ProductsItemInformation: SxProps = {
  width: {
    xs: '100%',
    md: '50%',
  },
  p: {
    xs: '0',
    md: '48px 0 0 24px',
  },
}

export const ProductsItemLabel: SxProps = {
  pb: 2,
  fontSize: '30px',
  fontWeight: '700',
  letterSpacing: '1px',
}

export const ProductsItemBrand: SxProps = {
  fontSize: '14px',
  pb: 2,
}

export const ProductsItemRateBox: SxProps = {
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
  pb: 2,
}

export const ProductsItemRateLabel: SxProps = {
  fontSize: '14px',
}

export const ProductsItemRateFeedback: SxProps = {
  fontSize: '14px',
  fontWeight: '600',
}

export const ProductsItemPriceBox: SxProps = {
  display: 'flex',
  gap: '10px',
  mb: '3px',
  alignItems: 'center',
}

export const ProductsItemCurrentPrice: SxProps = {
  fontSize: '25px',
  color: 'rgb(75, 180, 180)',
  fontWeight: '700',
}

export const ProductsItemOldPrice: SxProps = {
  textDecoration: 'line-through',
  fontSize: '18px',
  color: 'rgb(125, 135, 156)',
}

export const ProductsItemAvailableLabel: SxProps = {
  mb: 3,
  fontSize: '14px',
}

export const ProductsItemAddRemoveBox: SxProps = {
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
}

export const ProductsItemAddRemoveBtn: SxProps = {
  minWidth: 'unset',
  width: '38px',
  height: '38px',
  border: 1,
  p: 0,
  borderColor: '#4bb4b4',
  borderRadius: '4px',
}

export const ProductsItemQuantity: SxProps = {}

export const ProductsItemAddToCartBtn: SxProps = {
  height: '38px',
  color: '#fff',
}
