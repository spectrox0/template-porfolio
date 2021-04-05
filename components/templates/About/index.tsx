import * as React from "react";
import {ContainerAbout} from "./styles";
import {propsPage} from "../../../utils/animations/transitionPage";
import {
    colorCategory, descriptionAboutMe,
    firstName,
    imgProfile,
    imgProfileBlur,
    infoBiography,
    Services,
    skills,
    urlCV
} from "../../../config";
import {ImageProfile} from "@/components/molecules/ImageProfile";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Title} from '@/components/atoms/Title'
import {Text} from '@/components/atoms/Text'
import {Icon} from "../../atoms/Icon";
import {Service} from "../../molecules/Service";
import {DonutChartSkill} from "../../molecules/DonutChartSkill";
import {Box} from "../../atoms/Box";
import {Button} from "../../atoms/Button/Common";
import {useIntl} from "react-intl";
import {useRouter} from "next/router";

const AboutTemplate: React.FC = () => {
    const {formatMessage: t} = useIntl()
    const {locale = 'en'} = useRouter()
    return (
        <PerfectScrollbar>
            <ContainerAbout {...propsPage}>
                <div className={'container'}>
                    <div className={'row d-flex flex-wrap align-items-center '}>
                        <div className={'col-sm-12 col-md-7'}>
                            <ImageProfile srcBlurImage={imgProfileBlur} src={imgProfile} className={'my-1'}/>
                        </div>
                        <Title tagTitle={'h1'} alignText={'left'} fontSize={'3em'}
                               className={' col-sm-12 col-md-5 underline d-none d-md-flex '}>
                            About <strong> Me </strong>
                        </Title>
                    </div>
                    <div className={'row row-info flex-sm-row-reverse'}>
                        <div className={'col-md-9 my-2'}>
                            <Box>
                                <Title className={'my-2'} tagTitle={'h2'} fontSize={'1.7em'} fontWeight={'600'}
                                       alignText={'left'}> Hi i'm {firstName}</Title>
                                <Text fontSize={'1.5em'}> {descriptionAboutMe[locale]} </Text>
                                <div className={'row'}>
                                    {infoBiography.map((item, i) => (
                                        <div key={i}
                                             className={'col-sm-6 my-2 d-flex align-items-center info-biography'}>
                                            <Text fontWeight={'500'}
                                                  className={'text-capitalize mr-3'}> {t({id: item.name})} </Text>
                                            <Text className={'text-capitalize'}> {item.value}</Text>
                                        </div>
                                    ))}
                                </div>
                                <Title className={'mt-3 mb-2 text-capitalize'} tagTitle={'h2'} fontSize={'1.7em'} fontWeight={'600'}
                                       alignText={'left'}> {t({id: 'skills'})}</Title>
                                <div className={'row'}>
                                    {skills.map((item, i) => (
                                        <DonutChartSkill color={colorCategory[item.category]} delay={(i + 1) * 0.5}
                                                         key={item.key}
                                                         percentage={item.percentage}
                                                         className={'col-6 col-sm-4 col-md-3 my-2'} name={item.name}
                                                         icon={<Icon className={'icon'} name={item.key}/>}/>
                                    ))}
                                </div>
                            </Box>
                        </div>
                        <div className={'col-md-3 my-2'}>
                            <Box>
                                <Title className={'my-2 text-capitalize'} tagTitle={'h2'} fontSize={'1.7em'}
                                       fontWeight={'600'}> {t({id: 'services'})} </Title>
                                <div className={'row justify-content-center align-items-center'}>
                                    {Services.map((item, key) => {
                                        return (
                                            <div key={key} className={'col-sm-6 col-md-12'}>
                                                <Service className={'my-2'} color={colorCategory[item.key]}
                                                         title={item.name} icon={<Icon name={item.icon}/>}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Box>
                            {urlCV && (
                                <Box className={'mt-3 mb-2'}>
                                    <Button href={urlCV} target={"_blank"}>
                                        {t({id: 'download my cv'})}
                                    </Button>
                                </Box>)}
                        </div>
                    </div>
                </div>
            </ContainerAbout>
        </PerfectScrollbar>
    )
}
export default AboutTemplate;