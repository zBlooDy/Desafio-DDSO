/*
1. Extender la notificación para que también notifique la cantidad de clicks con las que el ganador gana. YA ESTA ✅

2. Hasta ahora venimos llevando registro de la cantidad de clicks. Nos gustaría ahora llevar registro de donde se hizo el click, es decir, guardar también la lista de donde se hizo click

Super desafio: incorporar un componente nuevo, que se muestre al lado del comparador, que por cada click que se produce, pinte un puntito en el área correspondiente */


import axios from 'axios';
import './App.css';
import { ComparadorClicks } from './ComparadorClicks';
import { useEffect, useState } from 'react';

function reportarComparativa(comparativa) {
  axios.post("http://localhost:9000/comparison", comparativa)
}

async function getComparativa() {
  const respuesta = await axios.get("http://localhost:9000/comparison")
  return respuesta.data
}

function App() {
  const [comparativa, setComparativa] = useState(null)

  useEffect(() => {
    getComparativa().then(setComparativa)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          comparativa ? (
            <ComparadorClicks
              izquierda={comparativa.izquierda}
              derecha={comparativa.derecha}
              onChange={reportarComparativa}
            />
          ) : <div>Cargando...</div>
        }
      </header>
    </div>
  );
} 

export default App;
