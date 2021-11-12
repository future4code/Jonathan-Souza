import React from "react";
import './CardPequeno.css';

const CardPequeno = (props) =>{

    return (
    <div className="card-pequeno-container">
        <div>
            <p>Email: { props.email }</p>
            <p>Endereço: { props.endereco }</p>
        </div>
    </div>

    )
}


export default CardPequeno;