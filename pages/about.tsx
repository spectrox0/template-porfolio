import  * as React from "react";
import dynamic from "next/dynamic";
import {ScreenLoading} from "../components/molecules/ScreenLoading";

const AboutTemplate  = dynamic(() => import('../components/templates/About'), {
    ssr: false,
    loading: () => <ScreenLoading loading/>
})
const About : React.FC  = () => {
    return (
        <AboutTemplate/>
    )
}
export default About