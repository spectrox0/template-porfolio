import * as React from "react";
import dynamic from "next/dynamic";
import {ScreenLoading} from "../../components/molecules/ScreenLoading";
import axios from "axios";
import {endpointGetWork} from "../../utils/endpoints";
import {WorkDesign} from "../../models/WorkDesign";
import Head from "next/head";
import {useRouter} from "next/router";
import {useIntl} from "react-intl";
// @ts-ignore
const DynamicComponent = dynamic(() => import('../../components/templates/Portfolio').then(mod => mod.PortfolioTemplate), {
    ssr: false,
    loading: () => <ScreenLoading loading/>
})

interface Props {
    works: WorkDesign[]
}

const Portfolio: React.FC<Props> = ({works = []}) => {
    const {formatMessage: t} = useIntl()
    return (
        <>
            <Head>
                <title>Paola - {t({id:"Portfolio"})} </title>
            </Head>
            <DynamicComponent works={works}/>
        </>
    )
}

export async function getStaticProps() {
    try {
        const {data: works} = await axios.get(endpointGetWork)
        console.log(works)
        return {props: {works}}
    } catch (err) {
        console.log(err)
        return {props: {works: []}}
    }

}

export default Portfolio