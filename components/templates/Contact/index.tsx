import * as React from 'react';
import {Box} from "../../atoms/Box";
import {ContainerContactTemplate} from "./styles";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Title} from "../../atoms/Title";
import {ContactForm} from "../../organisms/Form/Contact";
import {propsPage} from "../../../utils/animations/transitionPage";
import {socialNetwork} from "../../../config";
import {ItemContact} from "../../molecules/ItemContact";

export const ContactTemplate = () => {

    return (
        <PerfectScrollbar>
            <ContainerContactTemplate {...propsPage}>
                <div className={'container my-2'}>
                    <Box>
                        <Title tagTitle={'h1'}>
                            Contact
                            <b> me </b>
                        </Title>
                        <div className={'d-flex flex-wrap justify-content-center align-items-center'}>
                            {Object.entries(socialNetwork).map(([item, value], key) => {
                                return (
                                    <ItemContact key={key} className={'my-2 mx-2'} icon={item} {...value}/>
                                )
                            })}
                        </div>
                        <ContactForm/>
                    </Box>
                </div>
            </ContainerContactTemplate>
        </PerfectScrollbar>
    )
}