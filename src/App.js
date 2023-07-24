import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import { ThemeProvider } from "@mui/material";

function App() {
  const [coins, setCoins] = useState([]);

  // API URL
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  // Fetching the API URL
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        // console.log(response.data[0])
      })
      .catch((error) => {
        // API DATA --> console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
