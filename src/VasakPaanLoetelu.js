import { useState } from "react";
import kevade from "./pictures/kevade.jpg";

export const raamatud = [
  {
    id: 1,
    nimi: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,
    kirjeldus: "Eesti klassikaline romaan.",
    pilt: kevade,
  },
  {
    id: 2,
    nimi: "Tõde ja õigus",
    autor: "A. H. Tammsaare",
    aasta: 1926 - 1933,
    kirjeldus: "Eesti kirjanduse üks suurimaid ja mõjukamaid teoseid.",
    pilt: null,
  },
  {
    id: 3,
    nimi: "Rehepapp",
    autor: "Andrus Kivirähk",
    aasta: 2000,
    kirjeldus:'Komöödiline romaan, mis põhineb Eesti rahvuslikul müüdil "Kalevipoeg".',
    pilt: null,
  },
];
    
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
            <li>{props.nimi}</li>
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
