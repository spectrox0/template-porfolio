import * as React from 'react';
import * as Styles from './styles'

export type Props = {
    className?: string,
    url: string,
    zIndex?: number,
    position?: string,
    colorBackdrop?: string,
    opacityBackdrop?: number,
    fixed?: boolean,
}
export const BackgroundAbsolute = ({
                                       fixed = false,
                                       url,
                                       zIndex = -9999,
                                       className = '',
                                       position = 'center',
                                       colorBackdrop = "#000",
                                       opacityBackdrop = 0.4,
                                   }) => {
    return (
        <Styles.Div className={className}
                    fixed={fixed}
                    colorBackdrop={colorBackdrop}
                    opacityBackdrop={opacityBackdrop}
                    position={position}
                    zIndex={zIndex}
                    url={url}/>

    )
}