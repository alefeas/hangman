import { Link } from "react-router-dom"

export const Lobby = ({start}) => {
    return (
        <div className="lobby">
            <h1 className="title">HANGMAN</h1>
            <button className="customButton" onClick={start}>PLAY</button>
            <Link to='/tutorial'><button className="customButton">HOW TO PLAY</button></Link>
        </div>
    )
}
