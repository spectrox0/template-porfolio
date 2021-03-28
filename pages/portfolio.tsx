import * as React from "react";
import dynamic from "next/dynamic";
import {ScreenLoading} from "../components/molecules/ScreenLoading";
// @ts-ignore
const DynamicComponent = dynamic(() => import('../components/templates/Portfolio').then(mod => mod.PortfolioTemplate), {
    ssr: false,
    loading: () => <ScreenLoading loading/>
})
const Portfolio: React.FC = () => {

    return (
        <DynamicComponent/>
    )
}
export default Portfolio