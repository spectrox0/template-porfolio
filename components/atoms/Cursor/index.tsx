import * as React from 'react';
import {ContainerCursor} from "./styles";

export interface Props {
    color?: string
}

export const Cursor: React.FC<Props> = ({color}) => {
    React.useEffect(() => {
        const cursor = document.getElementById('cursor')
        const handlingMoveCursor = (e) => {
            if (cursor) {
                cursor.style.top = e.pageY + 'px';
                cursor.style.left = e.pageX + 'px';
            }
        }
        window.addEventListener('mousemove', handlingMoveCursor)
        return () => {
            window.removeEventListener('mousemove', handlingMoveCursor)
        }
    }, [])
    return (
        <ContainerCursor id={'cursor'} className={'cursor'} color={color}/>
    )
}