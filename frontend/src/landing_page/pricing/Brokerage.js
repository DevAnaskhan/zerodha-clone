import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="/pricing" style={{ textDecorationLine: "none" }}>
            <h1 className="fs-5">Brokerage calculator</h1>
          </a>
          <ul style={{textAlign: "left", lineHeight: "1.8", fontSize: "14px"}} className="text-muted">
            <li>
              Call & trade and RMS auto-squareoff:Additional charges of ₹50 +GST
              per order.
            </li>
            <li>
              An additional charge of ₹50 + GST per order applies for trades
              placed through Call & Trade or for positions automatically squared
              off by our Risk Management System (RMS).
            </li>
            <li>
              Estimate upfront brokerage and statutory regulatory charges for
              all your trades before execution.
            </li>
            <li>
              Know your exact profit margins and break-even point in real-time.
              Estimate complete buy and sell transaction charges across Equity,
              F&O, Currency, and Commodity segments effortlessly.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="/pricing" style={{ textDecorationLine: "none" }}>
            <h1 className="fs-5">List of Charges</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
