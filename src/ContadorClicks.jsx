import './ContadorClicks.css';
// import { useState } from 'react';

export function ContadorClicks({ clicks, setClicks, ganador, ubicacionClicks, setUbicacionClicks }) {
  // const [ubicacionClicks, setUbicacionClicks] = useState([])
  
  return (
    <div className={`ContadorClicks ${ganador ? 'ganador' : ''}`}  >
      <div className="ContadorClicks-contador"   >Número de clicks: {clicks}</div>
      <div className="ContadorClicks-lienzo" onClick={(e) => {
          setClicks(clicks + 1)
          setUbicacionClicks([{
              x: e.screenX, 
              y: e.screenY
            }, ...ubicacionClicks 
          ])
          console.log( ubicacionClicks )
        }}>
      </div>
    </div>
  )
}