import * as React from 'react'
import styled from 'styled-components'
import {paletteColorsDark} from '../styles/variables'
import Head from 'next/head'
import {motion} from 'framer-motion'
import {Box} from "../components/atoms/Box";
import {Title} from '../components/atoms/Title'

const Error404: React.FC = () => {
    return (
        <ErrorS
            animate={{opacity: 1, scale: 1, transition: {duration: 0.5}}}
            initial={{opacity: 0, scale: 0.5}}
            exit={{opacity: 0}}
        >
            <Head>
                <title>Paola - 404</title>
            </Head>
            <div className={'container'}>
                <Box>
                    <Title tagTitle={'h1'} fontSize={'3em'} alignText={'center'}>
                        Error<br/> <span> 404 </span>
                    </Title>
                </Box>
            </div>
        </ErrorS>
    )
}
export default Error404;
const ErrorS = styled(motion.section)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${paletteColorsDark.primary};
    font-weight: 700;
    text-align: center;
    font-size: 2em !important;
    line-height: 1.1em;
  }
`
