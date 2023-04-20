import VasakPaanLoetelu, { raamatud } from './VasakPaanLoetelu.js';
import LisaRaamat from './LisaRaamat.js';
import './App.css';
import ParemPaanLoetelu from './ParemPaanLoetelu.js';



function App() {
  return (
    <div className="App">
      <div className="container">
                <div class="row align-items-start">
                    <div class="col">
                      <div className="Vasak">
                        <h1>Raamatute nimekiri:</h1>
                        {raamatud.map((element, id) => {
                        return (<VasakPaanLoetelu key={id} nimi={element.nimi}/>)       
                        })}
                        <LisaRaamat />
                        </div>
                    </div>
                    <div class="col">
                      <div className="Parem">
                        <h1>Lemmikraamat:</h1>
                          <ParemPaanLoetelu 
                            nimi={raamatud[0].nimi}
                            autor={raamatud[0].autor}
                            pilt={raamatud[0].pilt} 
                          />
                        </div>
                      </div>
                </div>
      </div> 
    </div>
  );
}

export default App;