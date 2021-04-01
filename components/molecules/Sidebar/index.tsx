import * as React from 'react';
import {ContainerSidebar} from './styles'
import {Button} from "@/components/atoms/Button/Common";
import {Title} from "@/components/atoms/Title";
import {colorCategory} from "../../../config";

interface Props {
    isOpen?: boolean,
    items?: Item[],
    title: string
}

export interface Item {
    name: string,
    key: string
}

export const Sidebar: React.FC<Props> = ({isOpen = false, items = [], title}) => {
    return (
        <ContainerSidebar isOpen={isOpen}>
            <Title tagTitle={'h1'}>
                {title}
            </Title>
            <div className={'list'}>
                {items.map((item) => (
                    <Button key={item.key} color={colorCategory[item.key]}> {item.name}</Button>
                ))}
            </div>
        </ContainerSidebar>
    )
}