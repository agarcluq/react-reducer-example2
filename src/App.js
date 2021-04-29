import React,{useState,useEffect,useReducer} from "react";
import "./style.css";

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

    <div class="wordGuess">
      <h2>Jugador 1.</h2>
      <p> Escribe la palabra sin que el otro jugador la vea </p>
      <label>Escribe </label><input type="text" id="input-todo"/>
      <button 
      onClick={() => {addWord(document.getElementById("input-todo").value)}}>
      Enviar</button>
 
    </div>

    <div class="wordGuess wordGuess--marginTop">
    <h2>Jugador 2.</h2>
      <p> Adivina la palabra </p>
      <label>Escribe </label><input type="text" id="input-guess"/>
      <button 
      onClick={() => {GuessWord(document.getElementById("input-guess").value)}}>
      Enviar</button>
      <p>Total de intentos: {totalAttempts}</p>
      <p>{show ? `Perdiste: La palabra es ${word}` : ''}</p>

      <button onClick={()=>{
        setShow(!show) 
      }}>{show ? 'Empecemos de nuevo😅': 'Muéstrame la palabra🥺'}</button>

    </div>
    </div>
  );
}


