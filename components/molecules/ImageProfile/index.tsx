import * as React from 'react';
import {Image, Props as PropsImage} from '@/components/atoms/Image/Common'
import {ContainerImageProfile} from "./styles";

interface Props {
className?: string
}

export const ImageProfile: React.FC<Props & PropsImage> = ({
                                                               width = '35rem',
                                                               ...rest
                                                           }) => {
    const [load, setLoad] = React.useState<boolean>(false)
    return (
        <ContainerImageProfile load={load} {...rest}>
            <Image height={'auto'} width={width} setLoad={setLoad} {...rest} />
        </ContainerImageProfile>
    )
}
