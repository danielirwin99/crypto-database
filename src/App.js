import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";

function App() {
  const [coins, setCoins] = useState([]);

  // API URL
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  // Fetching the API URL
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Coins coins={coins} />
    </>
  );
}

export default App;
