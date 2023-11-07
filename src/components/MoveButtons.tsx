import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from 'react'

export const MoveButtons = () => {
    const themeCtx = useTheme();
    const [marginTop, setMarginTop] = useState(0);

     const minValue = -200; 
     const maxValue = 1;   

    const handleDownBtn = () => {
        setMarginTop((prevMargin) => Math.max(prevMargin - 100, minValue));
    }

    const handleUpBtn = () => {
        setMarginTop((prevMargin) => Math.min(prevMargin + 100, maxValue));
    }

    useEffect(() => {
        document.body.style.marginTop = `${marginTop}vh`;
      }, [marginTop]);

    return(
        <div className="absolute bottom-8 right-10 cursor-pointer">
            <div onClick={handleUpBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill='green' className="bi bi-arrow-up-circle mb-3" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
            </div>
            <div 
            onClick={handleDownBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  fill='green' className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
            </div>
        </div>
    )
}
