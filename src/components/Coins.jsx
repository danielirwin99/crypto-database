import React from "react";
import CoinItem from "./CoinItem";
import "../styles/Coins.css";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market Cap</p>
        </div>
        {/* Mapping over the different coins from the API */}
        {coins.map((coins) => {
          return <CoinItem coins={coins} key={coins.id} />;
        })}
      </div>
    </div>
  );
};

export default Coins;
