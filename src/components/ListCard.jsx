import React from "react";
import "../App.css";
import defaultImg from "../food.jpeg";

function ListCard({ rest }) {
  return (
    <div className="cards">
      <div className="card row">
        <img
          src={rest.media.length > 0 ? rest.media[0].url : defaultImg}
          alt="Avatar"
          style={{ width: "100%", height: "350px" }}
        />

        <div className="container col">
          <h3>
            Name:<b> {rest.name}</b>
          </h3>
          <br />
          {rest.address && (
            <h5>
              <b>Address:</b> {rest.address}
            </h5>
          )}
          <br />
        </div>
      </div>
    </div>
  );
}

export default ListCard;
