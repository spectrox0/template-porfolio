import * as React from 'react';
import {ContainerDonutChartSkill} from "./styles";
import {DonutChart} from "../../atoms/DonutChart";
import {Text} from "@/components/atoms/Text"

interface Props {
    percentage: number,
    className: string,
    name: string,
    delay?:number,
    icon: JSX.Element
}

export const DonutChartSkill: React.FC<Props> = ({name, className, icon, ...rest}) => {

    return (
        <ContainerDonutChartSkill className={className}>
            <Text className={'d-flex align-items-center'}>
                <span className="name"> {name}</span>
            </Text>
            <div className={'position-relative'}>
                {icon}
                <DonutChart {...rest} />
            </div>
        </ContainerDonutChartSkill>

    )

}