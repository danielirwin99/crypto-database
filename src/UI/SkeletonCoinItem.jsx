import { CircularProgress, Skeleton, Stack } from "@mui/material";
import React from "react";
import "../styles/Coin.css";

const SkeletonCoinItem = () => {
  return (
    <div className="loading">
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress sx={{ color: "#6900ff" }} size="7rem" />
      </Stack>
    </div>
  );
};

export default SkeletonCoinItem;
