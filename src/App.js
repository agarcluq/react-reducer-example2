import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [word,setWord] = useState('portatil')
  const [show,setShow]= useState(false)
  return (
    <div> 
      <p>{word && show}</p>
      <button onClick={()=>{
        setShow(!show)
        
      }}>{show ? 'Palabra secreta:'+ word : 'Muéstrame la palabra😑'}</button>
      <h1>Veo veo...</h1>
      <p>¿Qué ves?</p>
      <p>Una cosita que empieza por le letra: {word.charAt()}</p>
      <p></p>
    </div>
  );
}


