import kevade from './pictures/kevade.jpg';

export const raamatud = [
    { id: 1, nimi: 'Kevade', autor: 'Oskar Luts', aasta: 1912, kirjeldus: 'Eesti klassikaline romaan.', pilt: kevade },
    { id: 2, nimi: 'Tõde ja õigus', autor: 'A. H. Tammsaare', aasta: 1926-1933, kirjeldus: 'Eesti kirjanduse üks suurimaid ja mõjukamaid teoseid.', pilt: null },
    { id: 3, nimi: 'Rehepapp', autor: 'Andrus Kivirähk', aasta: 2000, kirjeldus: 'Komöödiline romaan, mis põhineb Eesti rahvuslikul müüdil "Kalevipoeg".', pilt: null }
]

function VasakPaanLoetelu() {
    return (
        <div className="vasakPaan">
           <ul>
                {raamatud.map((element) => (
                    <li key={element.id}>{element.nimi}</li>
                ))}
           </ul>  
        </div>
    )
}

export default VasakPaanLoetelu;