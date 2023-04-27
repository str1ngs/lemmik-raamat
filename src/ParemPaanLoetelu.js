function ParemPaanLoetelu({ valitudRaamatud }) {
    return (
        <div className="paremPaan">
            <p>{valitudRaamatud.nimi}</p>
            <p>{valitudRaamatud.autor}</p>
            <p>{valitudRaamatud.aasta}</p>
            <p>{valitudRaamatud.kirjeldus}</p>
            <p>{valitudRaamatud.pilt}</p>       
        </div>
    )
}

export default ParemPaanLoetelu; 
