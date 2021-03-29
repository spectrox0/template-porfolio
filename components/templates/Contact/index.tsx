import * as React from 'react';
import {Input} from "../../atoms/Input";
import {Box} from "../../atoms/Box";
import {ContainerContactTemplate} from "./styles";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Title} from "../../atoms/Title";

export const ContactTemplate = () => {

    return (
        <PerfectScrollbar>
            <ContainerContactTemplate>
                <div className={'container'}>
                    <Box>
                        <Title tagTitle={'h1'}>
                            Contact
                            <b> me </b>
                        </Title>
                        <Input type={'text'} value={'21'} onChange={() => {
                        }} id={'2'} label={'33'}/>
                    </Box>
                </div>
            </ContainerContactTemplate>
        </PerfectScrollbar>
    )
}