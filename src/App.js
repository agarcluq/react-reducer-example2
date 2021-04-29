import React,{useState,useEffect} from "react";
import "./style.css";



export default function App() {
  const [numGamer,setNumGamer] =useState(1)
  const [word,setWord] = useState('portatil')
  const [show,setShow]= useState(false)
  useEffect(()=>{
    if(!show){
    
      
    }
  },[])

  return (
    <div> 
    <div class="wordGuess">
      <h2>Jugador {numGamer}.</h2>
      <p> Escribe la palabra sin que el otro jugador la vea </p>
      <label>Escribe </label><input type="text" id="input-todo"/>
    </div>

    <div class="wordGuess wordGuess--marginTop">
    <h2>Jugador {setNumGamer(numGamer+1)}.</h2>
      <p>{show ? `Perdiste: La palabra es ${word}` : ''}</p>

      <button onClick={()=>{
        setShow(!show) 
      }}>{show ? 'Empecemos de nuevo😅': 'Muéstrame la palabra🥺'}</button>
      <p>Veo veo...</p>
      <p>¿Qué ves?</p>
      <p>Una cosita que empieza por le letra: {word.charAt()}</p>
    </div>
    </div>
  );
}


