import {useEffect, useState} from "react";


export const useAudio = (url: string, initialValue: boolean = false): [playing: boolean, toggle: () => void,] => {
        const [audio] = useState(new Audio(url));
        const [playing, setPlaying] = useState<boolean>(false);

        const toggle: () => void = () => {
            setPlaying(prevState => !prevState)
        }

        useEffect(() => {
                playing ? audio.play() : audio.pause();
            },
            [playing]
        );

        useEffect(() => {
                if (typeof audio.loop == 'boolean') {
                    audio.loop = true;
                } else {
                    const end = () => {
                        audio.currentTime = 0;
                        audio.play();
                    }
                    audio.addEventListener('ended', end, false);

                    return () => {
                        audio.removeEventListener('ended', end, false);
                    };
                }
            }, []
        )
        ;

        return [playing, toggle];
    }
;

