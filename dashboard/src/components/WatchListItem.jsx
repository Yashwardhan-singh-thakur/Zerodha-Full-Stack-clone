import React, { useState } from "react";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import WatchListActions from "./WatchListActions";

export default function WatchListItem({ stock, id }) {
  const [showAction, setshowAction] = useState(false);

  return (
    <li
      onMouseEnter={() => setshowAction(true)}
      onMouseLeave={() => setshowAction(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showAction && <WatchListActions id={id} />}
    </li>
  );
}
