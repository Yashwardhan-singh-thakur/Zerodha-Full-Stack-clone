import React, { useState, useContext } from "react";
import { watchList } from "../data/data";
import WatchListItem from "./WatchListItem";
import DoughnutChart from "./DoughnutChart";
import { Margin } from "@mui/icons-material";

export default function WatchList() {
  return (
    <div className="watchlist-container" style={{ marginBottom: "3rem" }}>
      <div className="search-container ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchList.length} / 250</span>
      </div>
      <ul className="list">
        {watchList.map((stock, i) => {
          return <WatchListItem stock={stock} key={i} id={i} />;
        })}
      </ul>

      <DoughnutChart watchList={watchList} />
    </div>
  );
}
