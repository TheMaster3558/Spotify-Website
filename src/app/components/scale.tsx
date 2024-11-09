export default function Scale(
    { name, value, bottomRange, topRange, units = "" }:
        { name: string, value: number, bottomRange: number, topRange: number, units: string }
) {
    console.log(value);
    console.log(bottomRange);
    console.log(topRange);
    return (
        <div>
            <input type="range" value={value} min={bottomRange} max={topRange} readOnly={true} step="0.01"/>
        </div>
    )
}
