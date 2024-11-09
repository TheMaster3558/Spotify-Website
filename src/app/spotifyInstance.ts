import {SpotifyApi} from '@spotify/web-api-ts-sdk';


const api = SpotifyApi.withClientCredentials(
    // @ts-expect-error
    // There shouldn't be an error
    process.env.NEXT_PUBLIC_CLIENT_ID,
    process.env.NEXT_PUBLIC_CLIENT_SECRET
);

export default api;
