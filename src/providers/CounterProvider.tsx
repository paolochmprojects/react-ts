import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export interface CounterType {
    value: number,
    setValue: Dispatch<SetStateAction<number>>
}

interface Props {
    children: ReactNode;
}

export const CounterContext = createContext<CounterType>({
    value: 0,
    setValue: ()=>{}
});

function CounterProvider({ children }: Props): JSX.Element {
    const [value, setValue] = useState<number>(0);

    return (
        <CounterContext.Provider value={{ value, setValue }}>
            {children}
        </CounterContext.Provider>
    );
}

export default CounterProvider;
