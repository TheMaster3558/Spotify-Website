import Image from 'next/image';

const TIME_STEPS = [3600000, 60000, 1000];


const minTwoDigits = (num: number) => {
    if (num / 10 < 1) {
        return `0${num}`;
    }
    return num.toString();
}


const durationMsToString = (duration: number) => {
    let result = "";
    for (const step of TIME_STEPS) {
        const num = Math.floor(duration / step);
        if (num > 0) {
            if (result.length != 0) {
                result += `${minTwoDigits(num)}:`
            }
            else {
                result += `${num}:`
            }

            duration -= num * step;
        }
    }
    return result.substring(0, result.length - 1);
}


export default function TrackInfo(
    { name, artist, imageUrl, duration, imageSize, onClick, explicit }:
        { name: string, artist: string, imageUrl: string, duration: number, imageSize: number,
          onClick: () => void, explicit: boolean }
) {
    return (
        <div className="flex items-center gap-4 mx-1 shadow-sm rounded-lg border-gray-300 border w-full hover:cursor-pointer"
             onClick={onClick}>
            <Image
                src={imageUrl}
                alt={name}
                height={imageSize}
                width={imageSize}
                style={{borderRadius: "5px"}}
            />
            <div className="flex-grow flex flex-col">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <h1 className="font-bold">{name}</h1>
                        {explicit &&
                            <Image
                                src="https://th.bing.com/th/id/OIP.LYElSbhG2qQdqrbuUGqPTQHaHa?w=800&h=800&rs=1&pid=ImgDetMain"
                                alt="explicit icon"
                                height={imageSize / 2}
                                width={imageSize / 2}
                                style={{borderRadius: "5px"}}
                            />
                        }
                    </div>
                    <span className="mr-5">{durationMsToString(duration)}</span>
                </div>
                <h2>
                    {artist}
                </h2>
            </div>
        </div>
    );
}
