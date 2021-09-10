import * as React from 'react';
import {TemplateDetailWork} from "../../components/templates/DetailWork";
import {useRouter} from "next/router";
import {WorkDesign} from "../../models/WorkDesign";
import axios from "axios";
import {endpointGetWork} from "../../utils/endpoints";
import Head from 'next/head'

interface Props {
    work: WorkDesign
}

const DetailWork: React.FC<Props> = ({work}) => {
    const router = useRouter()
    const back = () => {
        router.push("/portfolio").then(() => {
        })
    }
    return <>
        <Head>
            <title>Paola - {work.name}</title>
        </Head>
        <TemplateDetailWork work={work} back={back}/>
    </>
}

// This also gets called at build time
export async function getStaticPaths({locales = []}) {
    const {data: works}: { works: WorkDesign[] } = await axios.get(endpointGetWork)
    const paths = []
    await works.forEach( async(work, i) => {
        await locales.forEach(async (locale, i) => {
            await paths.push({params: {uri: work.id.toString()}, locale})
        }, this)
    }, this)
    return {
        paths,
        fallback: false// See the "fallback" section below
    };
}

// This also gets called at build time
export async function getStaticProps({params}) {
    const {data: work} = await axios.get(endpointGetWork + `/${params.uri}`)

    return {props: {work}}
}

export default DetailWork;