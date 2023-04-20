function ParemPaanLoetelu(props) {
    return (
        <div className="paremPaan">
                <p>Raamatu nimetus: {props.nimi} </p>
                <p>Autor: {props.autor} </p>
                <img src={props.pilt} alt={props.nimi} width="400px"/>
        </div>
    )
}

export default ParemPaanLoetelu; 
