interface Props {
    value: number;
}

function Display({ value }: Props): JSX.Element {
    return (
        <>
            <h1>{value}</h1>
        </>
    );
}

export default Display
