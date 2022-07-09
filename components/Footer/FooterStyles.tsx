import {SxProps} from '@mui/material/styles'

export const Footer: SxProps = {
    backgroundColor: 'primary.main',
    padding: '30px 0',
    color: '#fff',
}

export const LogoBox: SxProps = {
    mb: 3
}

export const FooterContentBox: SxProps = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: {
        'xs': 'column-reverse',
        'md': 'row'
    },
    gap: {
        'xs': '20px',
        'md': '290px',
    }

}

export const LeftSideBox: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignSelf: {
        'xs': 'self-start'
    },
    alignItems: 'flex-start',
    maxWidth: {
        'xs': '80%',
        'md': '40%'
    }
}

export const SocialLinkOuterBox: SxProps = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
}

export const SocialLinkInnerCircleBox: SxProps = {
    backgroundColor: 'rgba(0,0,0,.2)',

    '&.MuiButtonBase-root:hover': {
        backgroundColor: 'rgb(255 255 255 / 20%)'
    }
}

export const RightSideBox: SxProps = {
    display: 'flex',
    flexDirection: {
        'xs': 'row',
        'md': 'column'
    },
    gap: '10px',
    alignSelf: 'flex-start',
    flexWrap: {
        'xs': 'wrap',
        'md': 'nowrap'
    },
    maxWidth: {
        'xs': '60%',
        'md': '40%'
    }
}