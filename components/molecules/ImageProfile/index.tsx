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
    return (
        <ContainerImageProfile className={className} load={load} {...rest}>
            <Image height={height} width={width} setLoad={setLoad} {...rest} />
            <img className={'image-blur'} src={rest.srcBlurImage} alt={''}/>
        </ContainerImageProfile>
    )
}
