import React from "react";
import Col from "../Col";
import "./Row.css";


const Row = props => {
    const colCards = props.cards.map(colCard => 
        <Col card={colCard}/>
    );

    return (
        <div className="row">
            {colCards}
        </div>
    );
}
export default Row;
