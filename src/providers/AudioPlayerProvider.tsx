import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface AudioContextType {
    playingAudioId: string | null,
    setPlayingAudioId: Dispatch<SetStateAction<string | null>>
}

interface AudioProviderProps {
    children: ReactNode
}

export const AudioContext = createContext<AudioContextType>({
    playingAudioId: null,
    setPlayingAudioId: () => { }
})

function AudioPlayerProvider({ children }: AudioProviderProps): JSX.Element {

    const [playingAudioId, setPlayingAudioId] = useState<string | null>(null)

    return <AudioContext.Provider value={{ playingAudioId, setPlayingAudioId }}>
        {children}
    </AudioContext.Provider>
}

export default AudioPlayerProvider

