import React from "react";
import SingleCard from "./SingleCard";

const Cards = ({ meetups }) => {
  return meetups.map((meetup) => (
    <div
      style={{
        width: "60%",
        textAlign: "center",
        boxShadow: "0 0 4px 0 rgba(0, 0, 0, .1)",
      }}
    >
      <SingleCard {...meetup} key={meetup.id} />
    </div>
  ));
};

export default Cards;
