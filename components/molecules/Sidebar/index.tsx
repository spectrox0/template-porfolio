import * as React from 'react';
import {ContainerSidebar} from './styles'
import {Button} from "@/components/atoms/Button/Common";
import {Title} from "@/components/atoms/Title";
import {colorCategory} from "../../../config";
import {useIntl} from "react-intl";

interface Props {
    isOpen?: boolean,
    items?: Item[],
    title: string
    setCategory: (key:string) => void,
    category: string
}

export interface Item {
    name: string,
    key: string
}

export const Sidebar: React.FC<Props> = ({isOpen = false, items = [], title, setCategory, category}) => {
     const {formatMessage: t} = useIntl()
    return (
        <ContainerSidebar isOpen={isOpen}>
            <Title tagTitle={'h1'} className={'text-capitalize'}>
                {t({id:title})}
            </Title>
            <div className={'list'}>
                {items.map((item) => (
                    <Button className={item.key === category? 'active': ''}
                            key={item.key}
                            color={colorCategory[item.key]}
                            onClick={()=> setCategory(item.key)}> {t({id:item.name})}</Button>
                ))}
            </div>
        </ContainerSidebar>
    )
}