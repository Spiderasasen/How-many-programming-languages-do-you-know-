import {useState, useEffect} from 'react'
import "../styles/game.css"

function Game(){
    // vars for the game
    const [streak, setStreak] = useState(0);
    const [score, setScore] = useState(0);

    return(
        <div className="gameScreen">
            {/*keeping track of the streak and the score*/}
            <div>
                <p>Streak: {streak}</p>
                <p>Score: {score}</p>
            </div>

            {/*main area where the game will be*/}
            <div>
                <img alt={"This is where the image will be located at"}/>
                <div>
                    <button>answer 1</button>
                    <button>answer 2</button>
                    <button>answer 3</button>
                    <button>answer 4</button>
                </div>
            </div>

            {/*where 2 buttons will be*/}
            <div>
                <button>Stop</button>
                <button>Submit Answer</button>
            </div>
        </div>
    );
}
export default Game;