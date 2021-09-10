import * as React from "react";
import {ContactTemplate} from '@/components/templates/Contact'
import Head from "next/head";
import {useIntl} from "react-intl";

const Contact: React.FC = () => {
    const {formatMessage: t} = useIntl()
    return (
        <>
            <Head>
                <title> Paola - {t({id: "Contact"})}</title>
            </Head>
            <ContactTemplate/>
        </>
    )
}
export default Contact;