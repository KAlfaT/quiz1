

import { useState } from "react";
import React from "react";

const Contador = () => {
    const [contador, setContador]=useState(0)
    const sumar=() =>{
        setContador()
    }
    const restar=() =>{
        setContador()
    }
    const reiniciar=() =>{
        setContador()
    }
    const [number, setNumber] = useState({one: 0, two: 0, three: 0})
  const [suma, setSuma] = useState()



  const handleInput = (event) => {
    const { name, value } = event.target
    setNumber({...number, [name]: value})
  }
return(
    <div> 
    <h1> Actividad el Contador</h1>
    <div className="valores">
    <input className="input" onChange={handleInput} name="one" value={number.one} placeholder="Primer Valor"/>
    <input className="input" onChange={handleInput} name="two" value={number.two} placeholder="Segundo Valor"/>
    </div>
         <button onClick={suma}>Sumar</button>
         <button onClick={restar}>Restar</button>
         <button onClick={reiniciar}>Reiniciar</button>
         <h2> El resultado es:{contador} </h2>
    </div>
)
}
export default Contador;