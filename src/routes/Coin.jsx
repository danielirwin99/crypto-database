import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Coin.css";
import axios from "axios";
import DOMPurify from "dompurify";
import { BsArrowLeftCircle } from "react-icons/bs";

const Coin = () => {
  // When you click the coin it fires this
  const [coin, setCoin] = useState({});

  // Allows you to fetch different parameters to show the different coins
  const params = useParams();

  // API Fetch for the ID of each Coin
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  // After you click the coin what it fetches
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="coin__container">
        <div className="coin__content">
          <Link className="back" to="/">
            <BsArrowLeftCircle />
          </Link>
          <h1>{coin.name}</h1>
        </div>
        <div className="coin__content">
          <div className="coin__rank">
            <span className="coin__rank--btn">
              Rank # {coin.market_cap_rank}
            </span>
          </div>
          <div className="coin__info">
            <div className="coin__heading">
              {/* What this is: If there is an image show img, otherwise show null (nothing) */}
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>{coin.name}&ensp;</p>
              {coin.symbol ? <p>({coin.symbol.toUpperCase()}/AUD)</p> : null}
            </div>
            <div className="coin__price">
              {coin.market_data?.current_price ? (
                <h1>$ {coin.market_data.current_price.aud.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>
        <div className="coin__content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency
                    .aud ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.aud.toFixed(
                        2
                      )}{" "}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency
                    ? coin.market_data.price_change_percentage_24h_in_currency.aud.toFixed(
                        2
                      )
                    : null}{" "}
                  %
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency
                    .aud ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.aud.toFixed(
                        2
                      )}{" "}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency
                    .aud ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.aud.toFixed(
                        2
                      )}{" "}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency
                    .aud ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.aud.toFixed(
                        2
                      )}{" "}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency
                    .aud ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.aud.toFixed(
                        2
                      )}{" "}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="coin__content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? (
                  <p>$ {coin.market_data.low_24h.aud.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>

                {coin.market_data?.high_24h ? (
                  <p>$ {coin.market_data.high_24h.aud.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>$ {coin.market_data.market_cap.aud.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>

                {coin.market_data?.circulating_supply ? (
                  <p>{coin.market_data.circulating_supply.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="coin__content">
          <div className="about">
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
