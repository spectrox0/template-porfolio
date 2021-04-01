export const onMouseOver = () => {
    const cursor = document.getElementById('cursor');
    if (cursor) cursor.classList.add('hover')
}

export const onMouseLeave = () => {
    const cursor = document.getElementById('cursor');
    if (cursor) cursor.classList.remove('hover')
}