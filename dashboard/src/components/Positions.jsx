import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Positions() {
  let [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    async function fetchpositions() {
      try {
        let res = await axios.get("http://localhost:3000/position");
        console.log(res.data);
        setAllPositions(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchpositions();
  }, []);
  return (
    <>
      <h3 className="title">Positions {allPositions.length} </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          {allPositions.map((stock, i) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tbody key={i}>
                <tr>
                  <td>{stock.product}</td>
                  <td>{stock.name}.</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
