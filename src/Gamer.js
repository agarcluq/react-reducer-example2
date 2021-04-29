import React from "react";
import "./style.css";



export default function Gamer({title,description}) {
return(
  <>
      <h2>{title}</h2>
      <p> {description} </p>
      <label>Escribe </label><input type="text" id="input-todo"/>
      <button 
      onClick={() => {addWord(document.getElementById("input-todo").value)}}>
      Enviar</button>
  </>
)

}