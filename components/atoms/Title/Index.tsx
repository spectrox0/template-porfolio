import * as React from 'react';
import {ContainerTitle} from "./styles";

enum tagH {
    h1 = 'h1',
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6"
}

type hAlt = "h1" | "h2" | "h3" | "h4" | 'h5' | "h6";

export interface Props {
    tagTitle: tagH | keyof typeof tagH | hAlt;
    fontSize?: string,
    alignText?: string,
    className?: string,
    fontWeight?: string | number
}

export const TitleTag = ({children, tagTitle, ...styles}) => {
    switch (tagTitle) {
        case tagH.h1:
            return <h1 {...styles}> {children}</h1>
        case tagH.h2:
            return <h2 {...styles}> {children}</h2>
        case tagH.h3:
            return <h3 {...styles}> {children} </h3>
        case tagH.h4:
            return <h4 {...styles}> {children} </h4>
        case tagH.h5:
            return <h5 {...styles}> {children} </h5>
        default:
            return <h6 {...styles} > {children} </h6>
    }
}
export const Title: React.FC<Props> = ({
                                           tagTitle,
                                           fontSize,
                                           className,
                                           fontWeight,
                                           alignText,
                                           children
                                       }) => {
    return (
        <ContainerTitle fontSize={fontSize} alignText={alignText} fontWeight={fontWeight} className={className}>
            <TitleTag tagTitle={tagTitle} children={children}/>
        </ContainerTitle>)
}