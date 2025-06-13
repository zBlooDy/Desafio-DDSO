import "./ComparadorClicks.css";
import { useEffect, useState } from "react";
import { ContadorClicks } from "./ContadorClicks";

export function ComparadorClicks({ onChange, izquierda, derecha }) {
  const [clicksIzquierda, setClicksIzquierda] = useState(izquierda);
  const [clicksDerecha, setClicksDerecha] = useState(derecha);
  const [ubicacionClicksIzquierda, setUbicacionClicksIzquierda] = useState([]);
  const [ubicacionClicksDerecha, setUbicacionClicksDerecha] = useState([]);

  const ganador =
    clicksIzquierda > clicksDerecha
      ? "izquierda"
      : clicksDerecha > clicksIzquierda
      ? "derecha"
      : "empate";

  useEffect(() => {
    onChange({
      izquierda: clicksIzquierda,
      derecha: clicksDerecha,
    });
  }, [ganador]);

  return (
    //<div className="overlap">
    <div className="ComparadorClicks">
      <ContadorClicks
        clicks={clicksIzquierda}
        setClicks={setClicksIzquierda}
        ganador={ganador === "izquierda"}
        ubicacionClicks={ubicacionClicksIzquierda}
        setUbicacionClicks={setUbicacionClicksIzquierda}
      />
      <ContadorClicks
        clicks={clicksDerecha}
        setClicks={setClicksDerecha}
        ganador={ganador === "derecha"}
        ubicacionClicks={ubicacionClicksDerecha}
        setUbicacionClicks={setUbicacionClicksDerecha}
      />
    </div>
  );
}
