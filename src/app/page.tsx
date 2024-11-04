'use client'

import {useRouter} from 'next/navigation';
import Input from "@/app/components/input";
import {SpotifyApi, Track} from '@spotify/web-api-ts-sdk';
import {useEffect, useState} from "react";
import TrackInfo from '@/app/components/trackInfo';


const api = SpotifyApi.withClientCredentials(
    // @ts-expect-error
    // There shouldn't be an error
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
);


const getClosestMatches = async (query: string): Promise<Track[]> => {
    const items = await api.search(query, ['track']);
    return items.tracks.items.slice(0, 5);
}


export default function Home() {
    const [currentInput, setCurrentInput] = useState<string>('');
    const [autocompleteTracks, setAutocompleteTracks] = useState<Track[]>([]);

    const { push } = useRouter();

    useEffect(() => {
        const updateAutocomplete = async () => {
            if (currentInput.length == 0) {
                setAutocompleteTracks([]);
            }
            else {
                const tracks = await getClosestMatches(currentInput);
                setAutocompleteTracks(tracks);
            }
        }

        updateAutocomplete();
    }, [currentInput]);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3">
                <Input
                    onChange={setCurrentInput}
                    onSubmit={() => {
                        console.log(autocompleteTracks.length);
                        if (autocompleteTracks.length > 0) {
                            push(`tracks/${autocompleteTracks[0].id}`);
                        }
                    }}
                />
                <div className="grid gap-2 ml-1 w-full">
                    {autocompleteTracks.map((track: Track) => (
                        <TrackInfo
                            key={track.id}
                            name={track.name}
                            artist={track.artists.map((artist) => artist.name).join(', ')}
                            imageUrl={track.album.images[0].url}
                            duration={track.duration_ms}
                            imageSize={50}
                            onClick={() => push(`tracks/${track.id}`)}
                            explicit={track.explicit}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
