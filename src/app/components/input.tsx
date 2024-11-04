'use client'


export default function Input(
    { onChange, onSubmit }: { onChange: (current: string) => void, onSubmit: () => void }
) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="shadow-sm p-2 rounded-lg border-gray-300 border m-2 w-full"
                    type="text"
                    placeholder="Enter a song name..."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChange(e.target.value);
                    }}
                />
            </form>
        </div>
    );
}
