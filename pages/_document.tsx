import React from 'react'
import Document, {Head, Html, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

interface Props {
    styleTags: any
}

class MyDocument extends Document<Props> {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    render() {
        const {styleTags} = this.props
        const {locale} = this.props.__NEXT_DATA__
        return (
            <Html lang={locale}>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    {styleTags}
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"/>
                    <meta
                        name="description"
                        content="Portfolio Viviana Tepedino, Systems Engineer"
                    />
                    <meta property="og:title" content="Portfolio Viviana Tepedino"/>
                    <meta
                        name="og:description"
                        content="Portfolio Viviana Tepedino Systems Engineer"
                    />
                    <meta
                        name="keywords"
                        content="viviana, viviana tepedino ,UX, UI, tepedino, design,figma, adobe xd,mobile,web,SAP"
                    />

                    <meta
                        property="og:description"
                        content="Portfolio Viviana Tepedino, web and mobile design ,UI, UX,  SAP "
                    />
                    <meta property="og:image" content={'images/bg/bg8.jpg'}/>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-145358412-2"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-145358412-2');
        `,
                        }}
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
