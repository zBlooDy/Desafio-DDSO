import "./PuntoClick.css";

export function PuntoClick({ ubicacion }) {
  return (
    <div
      className="PuntoClick"
      style={{ left: ubicacion.x, top: ubicacion.y }}
    />
  );
}
