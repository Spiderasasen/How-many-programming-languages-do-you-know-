import {useNavigate} from "react-router-dom"
import "../styles/home.css"

function Home(){
    const navigate = useNavigate();

    return(
      <div className="start-screen">
          <h1>Do you know your programming languages?</h1>
          <p>This is  list of all programming languages that exist today.<br/>How many do you know?</p>
          <button onClick={() => navigate("/game")}>Begin the game</button>
      </div>
    );
}
export default Home;