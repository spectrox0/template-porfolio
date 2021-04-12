import * as React from 'react';
import {ContainerDonutChartSkill} from "./style";
import {DonutChart} from "../../atoms/DonutChart";
import {Text} from "@/components/atoms/Text"

interface Props {
    percentage: number,
    className: string,
    name: string,
    delay?: number,
    color?: string,
    icon: JSX.Element
}

export const DonutChartSkill: React.FC<Props> = ({name, className, icon, color, ...rest}) => {

    return (
        <ContainerDonutChartSkill className={className} color={color}>
            <Text fontWeight={'500'} className={'name'}>
                {name}
            </Text>
            <div className={'position-relative'}>
                {icon}
                <DonutChart color={color} {...rest} />
            </div>
        </ContainerDonutChartSkill>

    )

}