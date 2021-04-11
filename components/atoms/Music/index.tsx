import * as React from 'react';
import {ContainerPlayerMusic} from "./styles";
import {BsMusicNote} from "react-icons/bs";
import ReactAudioPlayer from 'react-audio-player';
import {useAudio} from "../../../hooks/useAudio";

interface Props {
    url: string,
    className?: string
}

export const Player: React.FC<Props> = ({url, className = ""}) => {
    const [playing, toggle] = useAudio(url, false)

    const ref = React.useRef<ReactAudioPlayer>()
    return (
        <ContainerPlayerMusic className={`${playing ? 'active ' : ''}` + className} active={playing} onClick={toggle}
                              htmlFor={'music-player'}>

            <BsMusicNote size={'1.6em'}/>
        </ContainerPlayerMusic>
    );
};