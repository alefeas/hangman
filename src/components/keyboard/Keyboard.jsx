import { useEffect, useRef } from "react"

export const Keyboard = ({ chooseLetter, correctLetters, wrongLetters, wordLetters, loading, unique, numberOfErrors, mute }) => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    const correctLetterSound = useRef(new Audio('correct-letter.mp3'))
    const wrongLetterSound = useRef(new Audio('wrong-letter.mp3'))
    const winSound = useRef(new Audio('win.mp3'))
    const defeatSound = useRef(new Audio('defeat.mp3'))
    
    useEffect(() => {
        if (mute) {
            return
        } else if (correctLetters.length === unique.length && unique.length > 0) {
            winSound.current.play()
        } else if (correctLetters.length > 0) {
            correctLetterSound.current.play()
        }
    }, [correctLetters])
    
    useEffect(() => {
        if (mute) {
            return
        } else if (wrongLetters.length >= numberOfErrors) {
            defeatSound.current.play()
        } else if (wrongLetters.length > 0) {
            wrongLetterSound.current.play()
        }
    }, [wrongLetters])
    
    return (
        <div className='keyboard'>
            {alphabet.map(item => 
                {
                    if (wrongLetters.includes(item) || correctLetters.includes(item)) {
                        return (
                            <div className={wrongLetters.includes(item) ? 'wrongLetter key nonClickable' : 'correctLetter key nonClickable'}>
                                {item.toUpperCase()}    
                            </div>
                            )
                    } else if (wrongLetters.length >= numberOfErrors || wordLetters.length === 0 || loading === true || unique.length === correctLetters.length) {
                        return (
                            <div className="key nonClickable">
                                {item.toUpperCase()} 
                            </div>
                        )
                    } else {
                        return (
                        <div className="key" onClick={() => chooseLetter({item})}>
                            {item.toUpperCase()}
                        </div>
                        )
                    }
                } 
            )}
        </div>
    )
}
