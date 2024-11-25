import api from "@/app/spotifyInstance";
import Scale from "@/app/components/scale";
import Image from "next/image";


export default async function Track({
    params
}: {
    params: Promise<{ id: number }>
}) {
    const id = (await params).id;
    const track = await api.tracks.get(id.toString());
    const audioFeatures = await api.tracks.audioFeatures(id.toString());

    const scales = [
        ["Acousticness", audioFeatures.acousticness, 0.0, 1.0],
        ["Danceability", audioFeatures.danceability, 0.0, 1.0],
        ["Energy", audioFeatures.energy, 0.0, 1.0],
        ["Instrumentalness", audioFeatures.instrumentalness, 0.0, 1.0],
        ["Liveness", audioFeatures.liveness, 0.0, 1.0],
        ["Loudness", audioFeatures.loudness, -60.0, 0.0],
        ["Speechiness", audioFeatures.speechiness, 0.0, 1.0],
        ["Valence", audioFeatures.valence, 0.0, 1.0]
    ];

    return (
        <div className="flex justify-center">
            <div className="flex items-center gap-12 py-7">
                <Image
                    className="rounded-lg"
                    src={track.album.images[0].url}
                    alt="cover"
                    width={250}
                    height={250}
                />
                <h1 className="font-bold text-5xl">{track.name}</h1>
            </div>
        </div>
    );
}


const getKey = (pitchClass: number, mode: number): string => {
    let root = "";
    switch (pitchClass) {
        case 0:
            root = "C";
            break;
        case 1:
            root = "C♯, D♭";
            break;
        case 2:
            root = "D";
            break;
        case 3:
            root = "D♯, E♭";
            break;
        case 4:
            root = "E";
            break;
        case 5:
            root = "F";
            break;
        case 6:
            root = "F♯, G♭";
            break;
        case 7:
            root = "G";
            break;
        case 8:
            root = "G♯, A♭";
            break;
        case 9:
            root = "A";
            break;
        case 10:
            root = "A♯, B♭";
            break;
        case 11:
            root = "B";
            break;
        default:
            return "Unknown"
    }

    return root + (mode) ? "Major" : "Minor";
}
