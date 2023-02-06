import React from "react";
import CoinItem from "./CoinItem";
import "../styles/Coins.css";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p >Coin</p>
          <p className="">Price (AUD)</p>
          <p>24h</p>
          <p className="hide-mobile">Volume (AUD)</p>
          <p className="hide-mobile">Market Cap (AUD)</p>
        </div>
        {/* Mapping over the different coins from the API */}
        {coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
