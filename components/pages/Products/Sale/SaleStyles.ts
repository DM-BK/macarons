import {SxProps} from '@mui/material/styles'

export const Sale: SxProps = {
    flexGrow: 1,
    backgroundColor: '#F6F9FC',
    pt: '64px',
    pb: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

export const TitleBox: SxProps = {
    p: '12px',
    mb: 4,
    mt: 3
}

export const SaleTitle: SxProps = {
    fontSize: '30px',
    fontWeight: '600',
    color: '#7D879C',

    '& span': {
        color: 'primary.main'
    }
}

export const SaleItemContainer: SxProps = {
    display: 'flex',
    flexWrap: 'wrap',
    m: '-24px 0 0 -24px',
    mb: 7
}

export const SalePaginationBox: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
    p: '12px'
}

export const ItemsCount: SxProps = {
    fontSize: '14px',
    color: 'rgb(43, 52, 69)'
}