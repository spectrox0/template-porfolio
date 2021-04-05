import * as React from "react";
import {useEffect, useMemo} from "react";
import {ContainerHomeTemplate} from "./styles";
import {BarContact} from "../../molecules/BarContact";

import {propsPage} from "../../../utils/animations/transitionPage"

import {init} from './AnimatedText'
import {Button} from "../../atoms/Button/Common";
import {AiOutlineArrowRight} from "react-icons/ai";
import {Title} from "../../atoms/Title";
import {firstName, lastName} from "../../../config";
import {useIntl} from "react-intl";
import Link from 'next/link'
import {useRouter} from "next/router";

export const HomeTemplate: React.FC = () => {
    const {formatMessage : t} = useIntl()

    useEffect(() => {
            init([
                 t({id:"Engineer Systems"}),
                t({id:"SAP Architecture"}),
                t({id:"UI/UX Design"}),
            ])
        }, [])

    return (
        <ContainerHomeTemplate id={'container-home'} {...propsPage}>
            <div className="container d-flex flex-column align-items-center">
                <Title fontSize={'3em'} tagTitle={'h1'}> {firstName} <strong> {lastName} </strong></Title>
                <h3 className='text'/>
                <Link href={'/portfolio'}>
                <Button classNameButton={'pl-4 pr-3'}>
                    {t({id:"check my works"})} <AiOutlineArrowRight size={'1em'}/>
                </Button>
                </Link>
            </div>
        </ContainerHomeTemplate>
    )
}
