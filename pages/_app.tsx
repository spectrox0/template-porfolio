import type {AppProps} from 'next/app'
import * as React from 'react'
import '../firebase.config'
import {Layout} from '@/components/organisms/Layout/Default'
import {LoadingRoute} from '@/components/organisms/LoadingRoute'
import 'react-perfect-scrollbar/dist/css/styles.css'
import {AnimatePresence} from 'framer-motion'
import {IntlProvider} from "react-intl";
import {useRouter} from "next/router";
import locales from '../locales'
import {GlobalStyle} from '../styles/global'
import 'bootstrap/dist/css/bootstrap.min.css'
const MyApp = ({Component, pageProps, router}: AppProps) => {

    const messages = {
        ...locales
    }
    //const store = useStore(pageProps.initialReduxState)
    const {locale = 'en'} = useRouter()
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <GlobalStyle/>
                <Layout>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route}/>
                    </AnimatePresence>
                    <LoadingRoute/>
                </Layout>
        </IntlProvider>)
}
export default MyApp;
