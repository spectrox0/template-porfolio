import * as React from 'react';
import {Box} from "../../atoms/Box";
import {ContainerContactTemplate} from "./styles";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Title} from "../../atoms/Title";
import {ContactForm} from "../../organisms/Form/Contact";

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
                        <ContactForm/>
                    </Box>
                </div>
            </ContainerContactTemplate>
        </PerfectScrollbar>
    )
}