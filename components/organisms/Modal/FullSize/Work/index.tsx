import * as React from 'react';
import {ContainerBackdrop, ContainerModalWork} from "./styles";
import {WorkDesign} from '../../../../../models/WorkDesign'
import {AnimatePresence} from "framer-motion";
import {Button} from "../../../../atoms/Button/Common";
import {Text} from "../../../../atoms/Text";
import {Title} from "../../../../atoms/Title";
import {AiOutlineLink} from "react-icons/all";
import {Skill} from "../../../../atoms/Skill";
import PerfectScrollbar from "react-perfect-scrollbar";
import {useRouter} from "next/router";
import {CarouselWork} from "../../../Carousel/Work";
import {propsAlertBackdropAnimation} from "../../../../../utils/animations/alert";

export interface Props {
    coordinate?: {
        x: number,
        y: number
    }
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
    const {locale} = useRouter()
    return (
        <PerfectScrollbar>
            <AnimatePresence> {
                props.work && props.coordinate && (
                    <>
                        <ContainerBackdrop onClick={props.close}/>
                        <ContainerModalWork
                            variants={{
                                initial: {
                                    top: "50%",
                                    left: "50%",
                                    translateX: "-50%",
                                    translateY: "-50%",
                                    opacity: 0,
                                    originX: props.coordinate.x + "px",
                                    originY: props.coordinate.y + "px",
                                    scale: 0.2,
                                },
                                enter: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.5,
                                        ease: [0.48, 0.15, 0.25, 0.96],
                                    },
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.2,
                                    originX: props.coordinate.x + "px",
                                    originY: props.coordinate.y + "px",
                                    transition: {
                                        duration: 0.4,
                                        ease: [0.48, 0.15, 0.25, 0.96],
                                    }
                                },
                            }}
                            animate="enter"
                            initial="initial"
                            exit="exit">
                            <div className={'row w-100 h-100 flex-sm-row-reverse'}>

                                <div className={'col-md-5'}>
                                    {props.work.images.length < 1 ?
                                        <img className={'image-background'} src={props.work.img.src} alt={''}/> :
                                        <CarouselWork images={props.work.images}/>}
                                    <div className={'d-flex flex-wrap w-100 options-image px-2'}>
                                        <Button className={'flex-grow-1 mx-2'}> See Project <AiOutlineLink/> </Button>
                                        <Button className={'flex-grow-1 mx-2'} onClick={props.close}>
                                            Back
                                        </Button></div>

                                </div>
                                <div className={'col-md-7'}>
                                    <div
                                        className={'container-work'}
                                    >
                                        <div className={'row w-100 h-100'}>
                                            <div className={'col-md-8'}>
                                                <Title tagTitle={'h3'} fontSize={'2em'} fontWeight={'500'}
                                                       className={'my-2'}>
                                                    {props.work.name}
                                                </Title>
                                                <Text className={'my-2'}>
                                                    {new Date(props.work.date.seconds * 1000).toLocaleString(
                                                        `${locale}-VE`,
                                                        options
                                                    )}
                                                </Text>
                                                <Text className={'my-2'} fontSize={'1.2em'}>
                                                    {props.work.description && props.work.description[locale]}

                                                </Text>
                                            </div>
                                            <div className={'col-md-4'}>
                                                <Title className={'my-3'} fontSize={'1.1em'} fontWeight={'500'}
                                                       tagTitle={'h4'}>
                                                    Related Skills
                                                </Title>
                                                <div className={'d-flex flex-wrap w-100'}>
                                                    {props.work.skills && props.work.skills.map((item, key) => (
                                                        <Skill className={'my-2 mx-1'} key={key + item} item={item}/>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ContainerModalWork>
                    </>)}

            </AnimatePresence>
        </PerfectScrollbar>
    )
}