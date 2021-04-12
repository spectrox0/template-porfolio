import type {AppProps} from 'next/app'
import * as React from 'react'
import {Layout} from '../components/organisms/Layout/Default'
import {LoadingRoute} from '../components/organisms/LoadingRoute'
import 'react-perfect-scrollbar/dist/css/styles.css'
import {AnimatePresence} from 'framer-motion'
import {IntlProvider} from "react-intl";
import {useRouter} from "next/router";
import locales from '../locales'
import {GlobalStyle} from '../styles/global'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "react-redux";
import {CloudinaryContext} from 'cloudinary-react'
import {useStore} from '../redux/store'
import {Alert} from "../components/organisms/Modal/Alert";

const MyApp = ({Component, pageProps, router}: AppProps) => {

    const messages = {
        ...locales
    }
    //const store = useStore(pageProps.initialReduxState)
    const {locale = 'en'} = useRouter()
    const store = useStore(pageProps.initialReduxState)
    return (
        <IntlProvider locale={locale} messages={messages[locale].default}>
            <Provider store={store}>
                <CloudinaryContext cloudName="dh4qxznuz">
                    <GlobalStyle/>
                    <Layout>
                        <AnimatePresence exitBeforeEnter>
                            <Component {...pageProps} key={router.route}/>
                        </AnimatePresence>
                        <LoadingRoute/>
                        <Alert/>
                    </Layout>
                </CloudinaryContext>
            </Provider>
        </IntlProvider>)
}
export default MyApp;
