import { useState } from "react";

    
function VasakPaanLoetelu(props) {
  let [arv, setArv] = useState(0);

  const suurenda = () => {
    setArv(arv + 1);
  };

  const vahenda = () => {
    setArv(arv - 1);
  };

  if (arv <= 0) {
    arv = 0;
  }

  return (
    <div className="vasakPaan">
      <ul>
            <li>Raamatu nimetus: {props.nimi}</li>
            <p>Autor: {props.autor}</p>
            <p>Aasta: {props.aasta}</p>
            <p>Kirjeldus: {props.kirjeldus}</p>
            <p style={{ color: "green", fontSize: "13px" }}>
              Mitu korda lugenud:
            </p>
            <button type="button" onClick={vahenda}>
              -
            </button>
            <button type="button" onClick={suurenda}>
              +
            </button>
            {arv}
      </ul>
    </div>
  );
}

export default VasakPaanLoetelu;
