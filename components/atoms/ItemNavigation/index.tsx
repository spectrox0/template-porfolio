import * as React from 'react';
import {ContainerItemNavigation} from './styles'
import Link from 'next/link'
import {onMouseLeave, onMouseOver} from '../../../helpers/cursor'

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
        <ContainerItemNavigation className={isActive ? 'active' : ''} onMouseOver={onMouseOver}
                                 onMouseLeave={onMouseLeave}>

            <Link passHref href={route} locale={locale}>
                <div className={'flex-grow-1 d-flex justify-content-center align-items-end'}>
                    {text && <span className={'hover d-none d-sm-inline-block'}> {text}</span>}
                    {Icon && <Icon className={'icon d-sm-none'}/>}
                </div>
            </Link>
        </ContainerItemNavigation>
    )
}