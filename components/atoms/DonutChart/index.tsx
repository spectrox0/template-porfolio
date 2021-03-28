import * as React from 'react';
import {useCountUp} from "react-countup";
import {ContainerDonutChart} from './styles'

interface Props {
    percentage: number,
    delay?: number
}

export const DonutChart: React.FC<Props> = ({percentage, delay = 0, children}) => {
    const {countUp, reset, start} = useCountUp({end: percentage, delay})
    return (
        <ContainerDonutChart active={true} viewBox="0 0 36 36" className="circular-chart orange">
            <path
                className="circle-bg"
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
                className="circle"
                strokeDasharray={`${countUp}, 100`}
                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">
                {countUp}%
            </text>
        </ContainerDonutChart>
    )
}