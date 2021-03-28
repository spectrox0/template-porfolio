export const paletteColorsDark = {
    primary: '#6bccef',
    primaryColorTransparent: (opacity :number):string =>  `rgba(107,204,239,${opacity})`,
    secondary: '#006b92',
    error: '#E44C65',
    background: '#1b262c',
    text: '#bbe1fa',
}

export const paletteColorsLight = {
    primary: '#6886c5',
    secondary: '#ffe0ac',
    error: '#E44C65',
    background: '#f9f9f9',
    text: '#050505',
}
export const widthSidebar = '18rem'
export const heightNavbar = '3.75rem'

export const animationSidebar = '.2s ease-in-out';
export enum Theme {
    Dark,
    Light
}

const themes = [paletteColorsDark, paletteColorsLight]

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
    'Playfair Display': '"Playfair Display" , sans-serif'
}
