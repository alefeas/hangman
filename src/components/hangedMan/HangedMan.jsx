import React from 'react'


export const HangedMan = ({wrongLetters}) => {
    return (
        <div>
        <div className="body wave">
            <div className={wrongLetters.length >= 1 ? "head" : ''}>
            <div className="neck"></div>
            </div>
            <div className={wrongLetters.length >= 2 ? "torso" : ''}>
            <div className={wrongLetters.length >= 3 ? "left-arm" : ''}>
                <div className="forearm"></div>
            </div>
            <div className={wrongLetters.length >= 4 ? "right-arm" : ''}>
                <div className="forearm"></div>   
            </div>
            </div>
            <div className={wrongLetters.length >= 2 ? "abdomen" : ''}>
                <div className={wrongLetters.length >= 5 ? "left-foot" : ''}>
                    <div className="lower-leg"></div>
                </div>
                <div className={wrongLetters.length >= 6 ? "right-foot" : ''}>
                    <div className="lower-leg"></div>
                </div>
            </div>    
        </div>
        </div>
    )
}
