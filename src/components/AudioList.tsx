import Audio from "./Audio";

interface AudioElement {
    id: string,
    src: string
}

const audios: AudioElement[]= [
    {
        id: crypto.randomUUID(),
        src: "https://res.cloudinary.com/dwdgpw20b/video/upload/v1699394609/illustrations/POL-star-way-short_kgyur6.wav",
    },
    {
        id: crypto.randomUUID(),
        src: "https://res.cloudinary.com/dwdgpw20b/video/upload/v1699396900/illustrations/POL-bomb-carrier-short_wja3oo.wav",
    },
    {
        id: crypto.randomUUID(),
        src: "https://res.cloudinary.com/dwdgpw20b/video/upload/v1699396934/illustrations/POL-henchman-short_jonp34.wav",
    },
];

function AudioList() {
    return (
        <div className="audio-list">
            {audios.map(({id, src}) => (
                <Audio key={id} id={id} src={src}/>
            ))}
        </div>
    );
}

export default AudioList;