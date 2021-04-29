import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [word,setWord] = useState('patata')
  return (
    <div>
      <Word word={word}/>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export default function Word({word}){
  return (
    <>
    <p>{word}</p>
    </>
  )
}
