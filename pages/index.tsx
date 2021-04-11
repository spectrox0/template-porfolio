import * as React from "react";
import {HomeTemplate} from "../components/templates/Home";
import Head from "next/head";

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>Viviana Tepedino - Home</title>
            </Head>
            <HomeTemplate/>
        </>
    )
}
export default Index;