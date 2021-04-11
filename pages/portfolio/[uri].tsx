import * as React from 'react';
import {TemplateDetailWork} from "../../components/templates/DetailWork";
import {useRouter} from "next/router";
import {WorkDesign} from "../../models/WorkDesign";
import axios from "axios";
import {endpointGetWork} from "../../utils/endpoints";

interface Props {
    work: WorkDesign
}

const DetailWork: React.FC<Props> = ({work}) => {
    const router = useRouter()
    const back = () => {
        router.push("/portfolio").then(() => {
        })
    }
    return work ? <TemplateDetailWork work={work} back={back}/> : null
}

// This also gets called at build time
export async function getStaticPaths() {
    const {data: works} = await axios.get(endpointGetWork)
    const paths = works.map((item) => ({params: {uri: item.id.toString()}}))
    console.log(paths)
    return {
        paths,
        fallback: false// See the "fallback" section below
    };
}

// This also gets called at build time
export async function getStaticProps({params}) {
    console.log(endpointGetWork + `/${params.uri}`)
    const {data: work} = await axios.get(endpointGetWork + `/${params.uri}`)

    return {props: {work}}
}

export default DetailWork;