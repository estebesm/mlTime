import {useWindowDimensions} from "@/hooks/useWindowDimensions";
import {useEffect} from "react";


export const useFullHeight = () => {
    const {height} = useWindowDimensions()
    useEffect(() => {
        document.documentElement.style.setProperty('--window-height', `${height}px`)
    }, [height])
}