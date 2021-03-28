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
        const handlingHover = ({target}) => {
            if (cursor) {
                if (target && target.className && target.className.length) {
                    if (target.className.includes('hover')) {
                        cursor.classList.add('hover')
                    } else cursor.classList.remove('hover')
                } else cursor.classList.remove('hover')
            }
        }
        window.addEventListener('mouseover', handlingHover);
        window.addEventListener('mousemove', handlingMoveCursor)
        return () => {
            window.removeEventListener('mousemove', handlingMoveCursor)
            window.removeEventListener('mouseover', handlingHover);
        }
    }, [])
    return (
        <ContainerCursor id={'cursor'} className={'cursor'} color={color}/>
    )
}