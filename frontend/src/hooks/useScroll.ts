import { useState, useEffect } from "react";

export const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState<number | string>("");

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return scrollPosition;
};
