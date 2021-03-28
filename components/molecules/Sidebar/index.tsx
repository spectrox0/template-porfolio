import * as React from 'react';
import {ContainerSidebar} from './styles'
import {Button} from "../../atoms/Button/Common";
import {Title} from "../../atoms/Title";

interface Props {
    isOpen?: boolean,
    items?: Item[],
    title: string
}

export interface Item {
    name: string
}

export const Sidebar: React.FC<Props> = ({isOpen = false, items = [], title}) => {
    return (
        <ContainerSidebar isOpen={isOpen}>
            <Title tagTitle={'h1'}>
                {title}
            </Title>
            <div className={'list'}>
                {items.map((item, index) => (
                    <Button type={'text'} key={index}> {item.name}</Button>
                ))}
            </div>
        </ContainerSidebar>
    )
}