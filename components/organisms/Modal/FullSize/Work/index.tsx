import * as React from 'react';
import {ContainerModalWork} from "./styles";
import {WorkDesign} from '../../../../../models/WorkDesign'
import {Button} from "../../../../atoms/Button/Common";
import {Text} from "../../../../atoms/Text";
import {Title} from "../../../../atoms/Title";
import {AiOutlineLink} from "react-icons/ai";
import {Skill} from "../../../../atoms/Skill";
import PerfectScrollbar from "react-perfect-scrollbar";
import {useRouter} from "next/router";
import {CarouselWork} from "../../../Carousel/Work";
import {Box} from "../../../../atoms/Box";
import {propsModalWorkAnimation} from "../../../../../utils/animations/modalWork";
import {useIntl} from "react-intl";
import dynamic from "next/dynamic";

// @ts-ignore
const CloudinaryImage = dynamic(() => import("../../../../atoms/Image/Cloudinary").then(mod => mod.CloudinaryImage), {ssr: false})

export interface Props {
    work?: WorkDesign,
    close?: () => void
}

const options = {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}
export const ModalWork: React.FC<Props> = (props) => {
    const {locale = "en"} = useRouter()
    const {formatMessage: t} = useIntl()
    return props.work && (
        <ContainerModalWork {...propsModalWorkAnimation}>
            <PerfectScrollbar>
                <div className={'modal-inner'}>
                    <div className={'row w-100 h-100'}>
                        <div className={'col-md-7 d-flex flex-column'}>

                            <Box className={'flex-grow-1 my-2 d-flex flex-column'}>
                                <Title tagTitle={'h3'} fontSize={'2em'} fontWeight={'500'}
                                       className={'my-2 flex-grow-0'}>
                                    {props.work.name}
                                </Title>
                                <div className={'flex-grow-1'}>
                                    <Text className={'my-2'}>
                                        {new Date(props.work.date).toLocaleString(
                                            `${locale}-VE`,
                                            //@ts-ignore
                                            options
                                        )}
                                    </Text>
                                    <Text className={'my-2'} fontSize={'1.2em'}>
                                        {props.work.description && props.work.description[locale]}

                                    </Text>
                                </div>
                                <div className={'d-flex flex-wrap w-100 px-2'}>
                                    <Button fontSize={'1.2em'} className={'flex-grow-1 mx-2'}
                                            classNameButton={'px-2 py-2'}> <AiOutlineLink/>
                                        {t({id: 'See project'})}
                                    </Button>
                                    <Button className={'flex-grow-1 mx-2'} fontSize={'1.2em'}
                                            classNameButton={'px-2 py-2'}
                                            onClick={props.close}>
                                        ⇐ {t({id: 'Back'})}
                                    </Button></div>
                            </Box>
                            <Box className={'my-2'}>
                                <Title className={'my-3'} fontSize={'1.1em'} fontWeight={'500'}
                                       tagTitle={'h4'}>
                                    Related Skills
                                </Title>
                                <div className={'d-flex flex-wrap w-100'}>
                                    {props.work.skills && props.work.skills.map((item, key) => (
                                        <Skill className={'my-2 mx-1'} key={key + item}
                                               item={item}/>
                                    ))}
                                </div>
                            </Box>
                        </div>
                        <div className={'col-md-5 d-flex flex-column'}>
                            <Box className={'flex-grow-1 my-2 overflow-hidden box-carousel'}>
                                {!props.work.images.length ?
                                    <CloudinaryImage
                                        className="img-background"
                                        alt=""
                                        image={props.work.image}/> :
                                    <CarouselWork images={[props.work.image, ...props.work.images]}/>}
                            </Box>

                        </div>
                    </div>
                </div>
            </PerfectScrollbar>
        </ContainerModalWork>)
}
