import * as React from 'react';
import {Image, Props as PropsImage} from '@/components/atoms/Image/Common'
import {ContainerImageProfile} from "./styles";

interface Props {
    className?: string,
    srcBlurImage: string,
}

export const ImageProfile: React.FC<Props & PropsImage> = ({
                                                               width = '35rem',
                                                               height = '100%',
    className,
                                                               ...rest
                                                           }) => {
    const [load, setLoad] = React.useState<boolean>(false)
    const imgRef = React.useRef<HTMLImageElement>(null)
    React.useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            setLoad(true)
        }
    }, [])
    return (
        <ContainerImageProfile className={className} load={load} {...rest}>
            <Image refImage={imgRef} height={height} width={width} setLoad={setLoad} {...rest} />
            <img className={'image-blur'} src={rest.srcBlurImage} alt={''}/>
        </ContainerImageProfile>
    )
}
