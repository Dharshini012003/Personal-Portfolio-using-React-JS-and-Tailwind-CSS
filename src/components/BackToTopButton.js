import { useEffect, useState } from "react";

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='btn'>
            {backToTopButton && (
                <button
                    style={{
                        position: "fixed",
                        bottom: "10px",
                        right: "0px",
                        height: "50px",
                        width: "50px",
                        fontSize: "50px",
                        background: "grey",
                        borderRadius: "50%",
                    
                        
                    }}
                    onClick={scrollUp}
                >
                    ^
                </button>
            )}
        </div>
    );
}

export default BackToTopButton;
