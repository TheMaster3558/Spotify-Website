export default function Scale(
    { name, value, bottomRange, topRange, units = "" }:
        { name: string, value: number, bottomRange: number, topRange: number, units: string }
) {
    console.log(value);
    console.log(bottomRange);
    console.log(topRange);
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold">{name}</h1>
            <input
                className="range pr-6 accent-green-500"
                type="range" value={value} min={bottomRange} max={topRange} readOnly={true} step="0.01"
            />
        </div>
    )
}
