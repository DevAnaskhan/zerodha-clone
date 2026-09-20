import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-3">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase" style={{ width: "40%" }} />
          <p className="text-small text-muted">Thematic investing platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/sensibullLogo.svg" alt="Sensibull" style={{ width: "40%" }} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/streakLogo.png" alt="Streak" style={{ width: "40%" }} />
          <p className="text-small text-muted">Systematic trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={{ width: "40%" }}
          />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/goldenpiLogo.png" alt="GoldenPi" style={{ width: "40%" }} />
          <p className="text-small text-muted">Bond trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/dittoLogo.png" alt="Ditto" style={{ width: "40%" }} />
          <p className="text-small text-muted">Personalized advice </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
