import "./ComparadorClicks.css"
import { useEffect, useState } from "react";
import { ContadorClicks } from "./ContadorClicks";

export function ComparadorClicks({ onChange, izquierda, derecha }) {
  const [clicksIzquierda, setClicksIzquierda] = useState(izquierda)
  const [clicksDerecha, setClicksDerecha] = useState(derecha)
  const [ubicacionClicks, setUbicacionClicks] = useState([])

  const ganador =
    (clicksIzquierda > clicksDerecha) ? 'izquierda' :
    (clicksDerecha > clicksIzquierda) ? 'derecha' :
    'empate'

  useEffect(() => {
    onChange({
      izquierda: clicksIzquierda,
      derecha: clicksDerecha,
      
    })
  }, [ganador])


  return (
      //<div className="overlap">
        <div className="ComparadorClicks">
          <ContadorClicks
            clicks={clicksIzquierda}
            setClicks={setClicksIzquierda}
            ganador={ganador === 'izquierda'}
            ubicacionClicks={ubicacionClicks}
            setUbicacionClicks={setUbicacionClicks}
            />
          <ContadorClicks
            clicks={clicksDerecha}
            setClicks={setClicksDerecha}
            ganador={ganador === 'derecha'}
            ubicacionClicks={ubicacionClicks}
            setUbicacionClicks={setUbicacionClicks}
          />
        </div>
      //</div>
  )
}