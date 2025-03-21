import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { bigPages, validNames } from "../utils/arrays";

const RouteWatcher = () => {
    const location = useLocation()
    const name = localStorage.getItem("username")
    
    useEffect(() => {
        const wrapper = document.querySelector(".wrapper")
        
        if ( location.pathname == "/not-found" || location.pathname == "/stay-here" ) {
            // wrapper.classList.add("plain")
        } else if (bigPages.includes(location.pathname) && validNames.includes(name)) {
            wrapper.style.overflow = "visible"
        } else if (location.pathname == '/admin/info' && validNames.includes(name)) {
            wrapper.style.overflow = "visible"
        } else {
            // wrapper.classList.remove("plain")
            wrapper.style.overflow = "hidden"
        }
    }, [location.pathname, name])
};

export default RouteWatcher;
