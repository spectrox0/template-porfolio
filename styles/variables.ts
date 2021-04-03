
export const paletteColorsDark = {
    primary: '#6bccef',
    primaryColorTransparent: (opacity :number):string =>  `rgba(107,204,239,${opacity})`,
    secondary: '#9cbc68',
    error: '#e44c65',
    errorTransparent: (opacity :number):string =>  `rgba(228,76,101,${opacity})`,
    background: '#202020',
    backgroundTransparent: (opacity :number):string =>  `rgba(20,20,20,${opacity})`,
    text: '#bbe1fa',
}

export const widthSidebar = '18rem'
export const heightNavbar = '3.75rem'

export const animationSidebar = '.2s ease-in-out';
export enum Theme {
    Dark,
    Light
}

const themes = [paletteColorsDark]

export const theme = (theme: Theme) => {
    return themes[theme]
}

interface Breakpoint {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
}

export const breakpoint: Breakpoint = {
    xs: '450px',
    sm: '600px',
    md: '920px',
    lg: '1280px',
    xl: '1920px'
}

export const fontFamily = {
    'Roboto': 'Roboto, sans-serif',
    'Montserrat': 'Montserrat , sans-serif',
    'Josefin Sans': '"Josefin Sans" , sans-serif'
}


export const primaryFontFamily = fontFamily["Josefin Sans"]