import React, {useEffect} from 'react';


export const FirefliesParticles = () => {
    useEffect(() => {

        const scriptTag = document.createElement('script')
        scriptTag.src = "/scripts/particles.js"
        scriptTag.type = "text/javascript";
        scriptTag.async = true;
        document.body.appendChild(scriptTag);
        scriptTag.addEventListener('load', () => {
        })
        return () => {
            document.body.removeChild(scriptTag)
        }
    }, [])
    return (
        <canvas id="canvas"/>
    )
}