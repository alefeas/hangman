import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../loader/Loader.jsx";
import { HangedMan } from "../hangedMan/HangedMan.jsx";
import { Keyboard } from "../keyboard/Keyboard.jsx";
import { Lobby } from "../lobby/Lobby.jsx";
import { ExitGame } from "../exitGame/ExitGame.jsx";
import { MusicButton } from "../musicButton/MusicButton.jsx";
import { useLocalStorage } from "../../hooks/useLocalStorage.js"

export const Game = () => {
    const [mute, setMute] = useLocalStorage('mute', false)
    const [playing, setPlaying] = useState(false)
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
        setPlaying(true)
        setWrongLetters([])
        setCorrectLetters([])
        fetchWord(apiUrl)
    }

    const chooseLetter = (letter) => {
        if (wordLetters.includes(letter.item) && !correctLetters.includes(letter.item)) {
            setCorrectLetters(oldArray => [...oldArray, letter.item])
        } else if (!wrongLetters.includes(letter.item) && !correctLetters.includes(letter.item)) {
            setWrongLetters(oldArray => [...oldArray, letter.item])
        } 
    }

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    useEffect(() => {
        setUnique(wordLetters.filter(onlyUnique))
    }, [wordLetters])

    return (
        <div className="game">
            {
                !playing ?
                <Lobby start={start}/>
                : 
                <>
                <div className="buttonsContainer">
                    <ExitGame setPlaying={setPlaying}/>
                    <MusicButton mute={mute} setMute={setMute}/>
                </div>
                {
                    !loading ?
                    <>
                        <div className="gallow">
                            <img src="https://cdn-icons-png.flaticon.com/512/1428/1428300.png" alt="" />
                            <HangedMan wrongLetters={wrongLetters}/>
                        </div>
                        <div className="lettersContainer">
                            {wordLetters.map((item) =>  {
                                return (
                                    <span className="letter">{correctLetters.includes(item) ? item.toUpperCase() : ''}</span>
                                )
                            }
                            )}
                        </div>
                        <Keyboard mute={mute} chooseLetter={chooseLetter} wrongLetters={wrongLetters} numberOfErrors={numberOfErrors} correctLetters={correctLetters} wordLetters={wordLetters} loading={loading} unique={unique}/>
                        <>
                            {
                                wrongLetters.length >= numberOfErrors ? 
                                <div className="finishMessage">
                                    <span>You lost!</span>
                                    <span>Correct word: {word}</span>
                                    <button className="playAgainButton customButton" onClick={start}>PLAY AGAIN</button>
                                </div>
                                : <></>
                            }
                        </>
                            {
                                correctLetters.length === unique.length && unique.length > 0 ?
                                <div className="finishMessage">
                                    <span>Correct!</span>
                                    <button className="playAgainButton customButton" onClick={start}>PLAY AGAIN</button>
                                </div>
                                : <></>
                            }
                    </>
                : <Loader/>
                }
                </>
            }
        </div>
    )
}