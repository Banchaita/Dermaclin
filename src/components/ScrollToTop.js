import React, { useEffect, useState } from "react";
import toparrow from '../assests/images/up-arrow.png'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>

            <div className="fixed bg-pink bottom-3 right-3  cursor-pointer">
                {isVisible && (
                    <div
                        onClick={scrollToTop}
                        className="fixed p-2 rounded-lg bg-pink-900 bottom-3 right-3 lg:bottom-5 lg:right-5 cursor-pointer"
                    >
                        <img src={toparrow} alt="" srcset="" />
                    </div>
                )}
            </div>

        </>
    )
}

export default ScrollToTop