import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Card.css";

const Cards = () => {
  const [card, setCard] = useState([]);
  console.log(card);

  const getData = async () => {
    try {
      let { data: response } = await axios.get(
        `https://web-scraping-backend.herokuapp.com/products`
      );
      setCard(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2 className="text-center">Mobiles</h2>
      <div className="container-fluid mt-4 card-container d-flex justify-content-center flex-wrap">
        {card.map((val) => {
          return (
            <div className="card" key={val._id}>
              <img
                className="card-img-top cardimg"
                alt="mobiles"
                src={val.image}
              ></img>
              <div className="card-body">
                <p className="title">{val.title}</p>
                <p className="rating">
                  <b>Rating:</b> {val.rating}
                </p>
                <p className="offerprice">
                  {" "}
                  <b>Offer Price:</b> {val.offerprice}
                </p>
                <p className="price">
                  {" "}
                  <b> Price:</b>
                  {val.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
