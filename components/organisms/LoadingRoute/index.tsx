import * as React from 'react'
import Router from 'next/router'
import {ScreenLoading} from '@/components/molecules/ScreenLoading'

export const LoadingRoute: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false)
    const [loadingClient, setLoadingClient] = React.useState<boolean>(true)

    React.useEffect(() => {
        setLoadingClient(false)
        Router.events.on('routeChangeStart', () => {
            setLoading(true)
        })

        Router.events.on('routeChangeComplete', () => {
            setLoading(false)
        })

        Router.events.on('routeChangeError', () => {
            setLoading(false)
        })
        return () => {
            Router.events.off('routeChangeStart', () => {
                setLoading(true)
            })
            Router.events.off('routeChangeComplete', () => {
                setLoading(false)
            })
            Router.events.off('routeChangeError', () => {
                setLoading(false)
            })
        }
    })

    return <ScreenLoading loading={loading || loadingClient}/>
}