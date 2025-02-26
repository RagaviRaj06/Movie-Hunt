import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//if in present page its down & nav to another page this scrollTo(0,0) is used to move up automatically
export const ScrollToTop = () =>{
    const { pathname } = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    }, [pathname])
    return null;
}