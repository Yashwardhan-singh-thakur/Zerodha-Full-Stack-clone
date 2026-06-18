import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/holding" element={<Holdings />} />
          <Route path="/position" element={<Positions />} />
          <Route path="/fund" element={<Funds />} />
          <Route path="/app" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}

// all right
