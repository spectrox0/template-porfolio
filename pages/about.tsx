import * as React from "react";

import AboutTemplate from "../components/templates/About"
import Head from 'next/head';
import {useIntl} from "react-intl";

const About: React.FC = () => {
    const {formatMessage: t} = useIntl()
    return (
        <>
            <Head>
                <title>Viviana Tepedino - {t({id: "About me"})}</title>
            </Head>
            <AboutTemplate/>
        </>
    )
}
export default About