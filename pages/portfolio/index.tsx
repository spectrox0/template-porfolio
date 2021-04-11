import * as React from "react";
import dynamic from "next/dynamic";
import {ScreenLoading} from "../../components/molecules/ScreenLoading";
import axios from "axios";
import {endpointGetWork} from "../../utils/endpoints";
import {WorkDesign} from "../../models/WorkDesign";
// @ts-ignore
const DynamicComponent = dynamic(() => import('../../components/templates/Portfolio').then(mod => mod.PortfolioTemplate), {
    ssr: false,
    loading: () => <ScreenLoading loading/>
})

interface Props {
    works: WorkDesign[]
}

const Portfolio: React.FC<Props> = ({works = []}) => {

    return (
        <DynamicComponent works={works}/>
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