import VasakPaanLoetelu from './VasakPaanLoetelu.js';
import kevade from "./pictures/kevade.jpg";
import './App.css';
import ParemPaanLoetelu from './ParemPaanLoetelu.js';
import { useState } from 'react';

function App() {
  const [raamatud, setRaamatud] = useState( [
    {
      nimi: "Kevade",
      autor: "Oskar Luts",
      aasta: 1912,
      kirjeldus: "Eesti klassikaline romaan.",
      pilt: kevade,
    },
    {
      nimi: "Tõde ja õigus",
      autor: "A. H. Tammsaare",
      aasta: 1926,
      kirjeldus: "Eesti kirjanduse üks suurimaid ja mõjukamaid teoseid.",
      pilt: null,
    },
    {
      nimi: "Rehepapp",
      autor: "Andrus Kivirähk",
      aasta: 2000,
      kirjeldus:'Komöödiline romaan, mis põhineb Eesti rahvuslikul müüdil "Kalevipoeg".',
      pilt: null,
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nimi = event.target.nimi.value;
    const autor = event.target.autor.value;
    const aasta = event.target.aasta.value;
    const kirjeldus = event.target.kirjeldus.value;
    const pilt = event.target.pilt.value;
  
    const uusRaamat = {
      nimi : nimi,
      autor : autor,
      aasta : aasta,
      kirjeldus : kirjeldus,
      pilt: pilt,
    }

    setRaamatud([...raamatud, uusRaamat]);
  };

  const kustutaRaamat = (raamat) => {
    const uuedRaamatud = raamatud.filter( (r) => {
      return r !== raamat });
    setRaamatud(uuedRaamatud);
  };
  const [valitudRaamat, setValitudRaamat] = useState("");
  
  const valiRaamat = (raamat) => {
      setValitudRaamat(raamat);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <div className="Vasak">
              <h1>Raamatute nimekiri:</h1>
              {raamatud.map((raamat, index) => {
                return (
                  <VasakPaanLoetelu 
                  key={index} 
                  raamat={raamat}
                  kustutaRaamat={kustutaRaamat}
                  valiRaamat={valiRaamat}
                   />
                );
                
              })}
              
              <form onSubmit={handleSubmit} className="LisaRaamat">
                <h4>Lisa uus raamat: </h4>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Nimetus</label>
                  <input type="text" className="form-control" id="nimi" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Autor</label>
                  <input type="text" className="form-control" id="autor" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput3">Aasta</label>
                  <input type="number" className="form-control" id="aasta"/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput3">Pilt</label>
                  <input type="number" className="form-control" id="pilt"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Kirjeldus:</label>
                  <textarea className="form-control" rows="2" id="kirjeldus"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Lisa
                </button>
              </form>
            </div>
          </div>
          <div className="col">
            <div className="Parem">
              <h1>Lemmikraamat:</h1>
              <ParemPaanLoetelu valitudRaamatud={valitudRaamat}
                
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;