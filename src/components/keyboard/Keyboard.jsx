export const Keyboard = ({ chooseLetter, correctLetters, wrongLetters, wordLetters, loading, unique, numberOfErrors }) => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

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
                    }else {
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
