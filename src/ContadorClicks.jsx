import "./ContadorClicks.css";
import { PuntoClick } from "./PuntoClick";

export function ContadorClicks({
  clicks,
  setClicks,
  ganador,
  ubicacionClicks,
  setUbicacionClicks,
}) {
  // const [ubicacionClicks, setUbicacionClicks] = useState([])

  return (
    <div className={`ContadorClicks ${ganador ? "ganador" : ""}`}>
      <div className="ContadorClicks-contador">Número de clicks: {clicks}</div>
      <div
        className="ContadorClicks-lienzo"
        onClick={(e) => {
          setClicks(clicks + 1);
          setUbicacionClicks([
            {
              x: e.nativeEvent.offsetX,
              y: e.nativeEvent.offsetY,
            },
            ...ubicacionClicks,
          ]);
          console.log(ubicacionClicks);
        }}
      >
        {ubicacionClicks.map((click, index) => (
          <PuntoClick key={index} ubicacion={click}></PuntoClick>
        ))}
      </div>
    </div>
  );
}
