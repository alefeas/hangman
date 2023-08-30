import { Link } from "react-router-dom"

export const Tutorial = () => {
    return (
        <div className="tutorial">
            <Link to='/'><svg className="exitIcon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="exit"><path d="m1.641 26.284 10.2 3.929c.638.248 1.365-.245 1.359-.934V26.35h6.716a1 1 0 0 0 1-1v-7.497a1 1 0 1 0-2 0v6.497H13.2V6.649a1 1 0 0 0-.641-.934L7.379 3.72h11.537v6.497a1 1 0 1 0 2 0V2.721a1 1 0 0 0-1-1H2c-.511-.037-1.005.495-1 1v22.63c0 .414.254.784.641.933zm9.559 1.538L3 24.664V4.178l8.2 3.158v20.486z"></path><path d="M25.147 18.889a.999.999 0 0 0 1.414 0l4.146-4.146a1 1 0 0 0 0-1.415l-4.146-4.146a.999.999 0 1 0-1.414 1.414l2.439 2.438H15.657a1 1 0 1 0 0 2h11.929l-2.439 2.439a1.001 1.001 0 0 0 0 1.416z"></path></svg></Link>
            <div>
                <h3>HOW TO PLAY</h3>
                <p>Hangman is a game in which the player(s) tries to guess a random word. You must choose the available letters until you guess it. The game will end once the word is guessed or when 6 errors are made. You can restart the game as many times as you want.</p>
            </div>
        </div>
    )
}
