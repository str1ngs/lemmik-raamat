import { useState } from "react";

function VasakPaanLoetelu( {raamat, kustutaRaamat, valiRaamat} ) {

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
        <li  style={{cursor: "pointer"}} onClick={() => valiRaamat(raamat)}>Raamatu nimetus: {raamat.nimi}</li>
        <p style={{ color: "green", fontSize: "13px" }}>Mitu korda lugenud:</p>
        <button type="button" onClick={vahenda}>
          -
        </button>
        <button type="button" onClick={suurenda}>
          +
        </button>
        {arv}
        <p></p>
        <button
          className="col-1 btn btn-link"
          onClick={() => kustutaRaamat(raamat)}
        >
          <p>Kustuta</p>
        </button>
      </ul>
    </div>
  );
}

export default VasakPaanLoetelu;
