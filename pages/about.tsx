import * as React from "react";

import AboutTemplate from "../components/templates/About"
import Head from 'next/head';

const About: React.FC = () => {
    return (
        <>
            <Head>
                <title>About me Viviana Tepedino</title>
            </Head>
            <AboutTemplate/>
        </>
    )
}
export default About