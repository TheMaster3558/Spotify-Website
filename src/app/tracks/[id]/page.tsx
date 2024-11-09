import api from "@/app/spotifyInstance";
import Scale from "@/app/components/scale";


export default async function Track({
    params
}: {
    params: Promise<{ id: number }>
}) {
    const id = (await params).id;
    const track = await api.tracks.audioFeatures(id.toString());

    return (
        <Scale name="Danceability" value={track.danceability} bottomRange={0} topRange={1} units=""/>
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
