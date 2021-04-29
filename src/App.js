import React,{useState,useEffect,useReducer} from "react";
import "./style.css";
import Gamer from './Gamer.js'
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};


export default function App() {
  const [totalAttempts,dispatch]=useReducer(reducer, initialState);
  const [word,setWord] = useState('')
  const [show,setShow]= useState(false)
  const [win,setWin] =useState(false)

  // Añadir palabra
  const addWord = (word) => {
    setWord(word);
    document.getElementById("input-todo").value='';
  }

  // Adivina la palabra
  const GuessWord = (wordGuess) => {
    if(word===wordGuess){
      console.log('ganaste')
      dispatch('reset')
      setWord('')
      setWin(true)
    }else{
      dispatch('increment')
      // setShow(true)
    }
    document.getElementById("input-guess").value='';
  }

  return (
    <div> 
      <div>
        <h1>Veo veo...</h1>
        <p>- ¿Qué ves?</p>
        <p>Una cosita que empieza por la letra: {word.charAt()}</p>
      </div>

    <div className="wordGuess">
    <Gamer 
    title="Jugador 1."
    description="Escribe la palabra sin que el otro jugador la vea"/>
      <label>Escribe </label><input type="text" id="input-todo"/>
      <button 
      onClick={() => {addWord(document.getElementById("input-todo").value)}}>
      Enviar</button>
 
    </div>

    <div className="wordGuess wordGuess--marginTop">
      <Gamer 
      title="Jugador 2."
      description="Adivina la palabra"/>

      <label>Escribe </label><input type="text" id="input-guess"/>
      <button 
      onClick={() => {
        GuessWord(document.getElementById("input-guess").value)      
        }}>
      Enviar</button>
      <p>Total de intentos: {totalAttempts}</p>
      <p>{show ? `Perdiste: La palabra es ${word}` : ''}</p>
      <p>{win ? `Ganaste: La palabra es ${word}, ahora tu eres el jugador 1` : ''}</p>

      <p id="win"></p>

      <button onClick={()=>{
        setShow(!show) 
      }}>{show ? 'Empecemos de nuevo😅': 'Muéstrame la palabra🥺'}</button>

    </div>
    </div>
  );
}


