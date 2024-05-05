import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ data }) => {
  const [cards, setCards] = useState([{}]);

  console.log(data);

  useEffect(() => {
    setCards([...data]);
  }, [data]);

  return (
    <div className="cardMain-container">
      <div>
        {cards.map((card) => (
          <div className="Card-container">
            <div className="subClass">
              <img className="logo" src={card.logoUrl} alt="logo" />
              <span>
                <p>{card.companyName}</p>
                <p>{card.jobRole}</p>
                <p>{card.location}</p>
              </span>
            </div>

            <p>
              Estimated Salary:{card.salaryCurrencyCode}
              {card.minJdSalary}-{card.maxJdSalary}
            </p>
            <p>About Company:</p>
            <p>About us</p>
            <p>{card.jobDetailsFromCompany}</p>
            <p>Minimum Experience</p>
            <p>{card.minExp} Years</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
