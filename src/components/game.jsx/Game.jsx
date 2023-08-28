import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../loader/Loader.jsx";
import { HangedMan } from "../hangedMan/HangedMan.jsx";
import { Keyboard } from "../keyboard/Keyboard.jsx";

export const Game = () => {
    const [word, setWord] = useState('')
    const [wordLetters, setWordLetters] = useState([])
    const [unique, setUnique] = useState([])
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [loading, setLoading] = useState(false)
    const numberOfErrors = 6

    const apiUrl = 'https://random-word-api.herokuapp.com/word?lang=en'

    const fetchWord = async (url) => {
        setLoading(true)
        try {
            const response = await axios.get(url);
            setWordLetters(response.data[0].split(''))
            setWord(response.data[0])
        } catch (error){
            console.error('Error getting API data:', error);
        }
        setLoading(false)
    }

    const start = () => {
        setWrongLetters([])
        setCorrectLetters([])
        fetchWord(apiUrl)
    }
    
    const chooseLetter = (letter) => {
        if (wordLetters.includes(letter.item) && !correctLetters.includes(letter.item)) {
            setCorrectLetters(correctLetters + letter.item)
        } else if (!wrongLetters.includes(letter.item) && !correctLetters.includes(letter.item)) {
            setWrongLetters(oldArray => [...oldArray, letter.item])
            console.log(wrongLetters);
        } 
    }

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    useEffect(() => {
        setUnique(wordLetters.filter(onlyUnique))
    }, [wordLetters])

    return (
        <div>
            {
                !loading ?
                <>
                    <div>
                        <button onClick={start}>PLAY</button>
                        {word}
                    </div>
                    <div className="lettersContainer">
                        {wordLetters.map((item) =>  {
                            return (
                                <span className="letter">{correctLetters.includes(item) ? item.toUpperCase() : ''}</span>
                            )
                        }
                        )}
                    </div>
                    <Keyboard chooseLetter={chooseLetter} wrongLetters={wrongLetters} numberOfErrors={numberOfErrors} correctLetters={correctLetters} wordLetters={wordLetters} loading={loading} unique={unique}/>
                    <>
                        {
                            wrongLetters.length >= numberOfErrors ? 
                            <span>You lose!</span>
                            : <></>
                        }
                    </>
                        {
                            correctLetters.length === unique.length ?
                            <span>Correct!</span>
                            : <></>
                        }
                    <HangedMan wrongLetters={wrongLetters}/>
                </>
            : <Loader/>
        }
        </div>
    )
}

/* className={wrongLetters.includes({item}) ? 'wrongLetter key' : 'correctLetter key'}  */