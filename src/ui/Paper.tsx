import {ReactNode, useEffect, useState} from "react";

interface Props {
    children?: ReactNode;
}

export const Paper = ({children}: Props) => {
    const [innerHeight, setInnerHeight] = useState<number>(0)
    useEffect(() => {
        setInnerHeight(window.innerHeight)
    }, [])
    return (
        <div style={{
            height: innerHeight
        }}>
            {children}
        </div>
    );
};