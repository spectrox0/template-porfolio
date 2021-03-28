import * as React from 'react';
import {ContainerItemNavigation} from './styles'
import Link from 'next/link'
import {paletteColorsDark} from "@/styles/variables"

export interface Route {
    text?: string
    route: string
    icon?: React.FunctionComponent<any> | null
}

interface Props {
    isActive?: boolean
    locale: string
}

export const ItemNavigation: React.FC<Route & Props> = ({
                                                            locale = 'en',
                                                            text,
                                                            route,
                                                            icon: Icon,
                                                            isActive
                                                        }) => {


    return (
        <ContainerItemNavigation className={isActive? 'active hover' : 'hover'}>

            <Link passHref href={route} locale={locale}>
                <div className={'hover'}>
                    {text && <span className={'hover'}> {text}</span>}
                    {Icon && <Icon className={'icon hover'}/>}
                </div>
            </Link>
        </ContainerItemNavigation>
    )
}