import React from "react";
import Card from "../Card/Card";
import "./CardSection.css";
import list from "../data";


const CardSection = ({ handleClick }) => {
    return (
        <section>
            {list.map((item) => (
                <Card key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
    );
};

export default CardSection;