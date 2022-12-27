import {SxProps} from '@mui/material/styles'

type GetStyles = (isActive: boolean) => SxProps

export const Wrapper: SxProps = {
    flex: '1 1 0',
    p: '12px',
    minWidth: '200px',
    flexBasis: {
        sm: '100%',
        md: '50%',
        lg: '25%'
    }
}

export const getCategoryItem: GetStyles = isActive => ({
    height: '175px',
    border: 1,
    borderColor: '#DAE1E7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '8px',
    backgroundColor: isActive ? '#fff' : 'transparent',
    cursor: 'pointer'
})

export const getDiscount: GetStyles = isActive => ({
    boxShadow: isActive ? '0px 8px 20px -5px rgb(75 180 180 / 90%)' : 'unset',
    transition: 'all .3s',
    position: 'absolute',
    top: '16px',
    right: '16px',
    p: '5px 10px',
    backgroundColor: isActive ? 'primary.main' : '#E3E9EF',
    borderRadius: '16px',
    color: isActive ? '#fff' : 'inherit',
})

export const DiscountLabel: SxProps = {
    fontSize: '10px'
}

export const getIcon: GetStyles = isActive => ({
    color: isActive ? 'primary.main' : '#0F3460'
})

export const getLabel: GetStyles = isActive => ({
    color: isActive ? 'primary.main' : 'inherit',
})