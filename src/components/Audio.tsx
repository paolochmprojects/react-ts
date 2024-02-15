import { useContext, useEffect, useRef, useState } from "react"
import { AudioContext } from "../providers/AudioPlayerProvider"

interface AudioProps {
    id: string,
    src: string
}

function Audio({ id, src }: AudioProps): JSX.Element {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [audioIsActive, setAudioIsActive] = useState<boolean>(false)
    const { playingAudioId, setPlayingAudioId } = useContext(AudioContext)

    function handleTooglePlay() {
        setAudioIsActive(value => !value)
        if (audioIsActive) {
            audioRef.current?.pause()
        } else {
            audioRef.current?.play()
            setPlayingAudioId(id)
        }

    }

    useEffect(() => {
        if (playingAudioId !== null) {
            if (playingAudioId !== audioRef.current?.id) {
                setAudioIsActive(false)
                audioRef.current?.pause()
            }
        }
    }, [playingAudioId])

    return (<>
        <div className="audio">
            <audio ref={audioRef} id={id} src={src} />
            <button
                title={audioIsActive ? "Pause" : "Play"}
                onClick={handleTooglePlay}>
                {audioIsActive ? "⏸" : "▶"}
            </button>
        </div>
    </>)
}

export default Audio