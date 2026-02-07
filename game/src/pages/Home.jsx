import {useState, useEffect} from 'react'
import "../styles/home.css"

function Home(){
    return(
      <div class="start-screen">
          <h1>Do you know your programming languages?</h1>
          <p>This is  list of all programming languages that exist today.<br/>How many do you know?</p>
          <button>Begin the game</button>
      </div>
    );
}
export default Home;