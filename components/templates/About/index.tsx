import * as React from "react";
import {ContainerAbout} from "./styles";
import {propsPage} from "../../../utils/animations/transitionPage";
import {colorCategory, imgProfile, infoBiography, Services, skills} from "../../../config";
import {ImageProfile} from "@/components/molecules/ImageProfile";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Title} from '@/components/atoms/Title'
import {Text} from '@/components/atoms/Text'
import {Icon} from "../../atoms/Icon/intex";
import {Service} from "../../molecules/Service";
import {DonutChartSkill} from "../../molecules/DonutChartSkill";

const AboutTemplate: React.FC = () => {
    return (
        <PerfectScrollbar>
            <ContainerAbout {...propsPage}>
                <div className={'container'}>
                    <div className={'row d-flex flex-wrap align-items-center'}>
                        <div className={'col-sm-12 col-md-7'}>
                            <ImageProfile src={imgProfile} className={'my-1'}/>
                        </div>
                        <Title tagTitle={'h1'} alignText={'left'} fontSize={'3em'}
                               className={'mb-5 col-sm-12 col-md-5 underline'}>
                            About <strong> Me </strong>
                        </Title>
                    </div>
                    <div className={'row row-info'}>
                        <div className={'col-md-3'}>
                            <div className={'container-services'}>
                                <Title tagTitle={'h2'} fontSize={'1.7em'} fontWeight={'600'}> Services </Title>
                                <div className={'list-services'}>
                                    {Services.map((item, key) => {
                                        return (
                                            <Service className={'my-2'} color={colorCategory[item.key]} title={item.name} key={key} icon={<Icon name={item.icon}/>}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={'col-md-9'}>
                            <div className={'container-info'}>
                                <Title className={'my-2'} tagTitle={'h2'} fontSize={'1.7em'} fontWeight={'600'}
                                       alignText={'left'}> Hi i'm Viviana</Title>
                                <Text fontSize={'1.5em'}> Me encanta el reggaeton duro, adicta al buen naruto y al
                                    sharingan </Text>
                                <div className={'row'}>
                                    {infoBiography.map((item, i) => (
                                        <div className={'col-sm-6 my-2 d-flex align-items-center info-biography'}>
                                            <Text fontWeight={'500'}
                                                  className={'text-capitalize mr-3'}>{item.name} </Text>
                                            <Text className={'text-capitalize'}> {item.value}</Text>
                                        </div>
                                    ))}
                                </div>
                                <Title className={'my-2'} tagTitle={'h2'} fontSize={'1.7em'} fontWeight={'600'}
                                       alignText={'left'}> Skills</Title>
                                <div className={'row'}>
                                    {skills.map((item, i) => (
                                        <DonutChartSkill color={colorCategory[item.category]} delay={i * 0.5}
                                                         key={item.key}
                                                         percentage={item.percentage}
                                                         className={'col-6 col-sm-4 col-md-3 my-2'} name={item.name}
                                                         icon={<Icon className={'icon'} name={item.key}/>}/>
                                    ))}
                                </div>
                                <Text> jupsu clones de sombra, picar diamante en minecraft, controlar carteles de
                                    naruto </Text>
                                <Title className={'my-2'} tagTitle={'h2'} fontSize={'1.7em'} fontWeight={'600'}
                                       alignText={'left'}> Interests</Title>
                                <Text> Putas dinero naruto robar bebes trafico por costa y tierra</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerAbout>
        </PerfectScrollbar>
    )
}
export default AboutTemplate;