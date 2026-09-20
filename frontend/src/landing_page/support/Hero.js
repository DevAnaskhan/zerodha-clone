import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportwrapper">
        <h4>Support Portal</h4>
        <a href="/support"> Track Tickets</a>
      </div>
      <div className=" row p-3 m-3">
        <div className="col-6 p-5">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg. How do I activate F&O" /><br/>

          <a href="/support">Track account Opening</a>
          <a href="/support">Track segment activation</a>
          <a href="/support">Intraday margins</a>
          <a href="/support">Kite user Manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li className="mb-3"><a href="/support">Current Takeover and Delisting - january 2024</a></li>
            <li><a href="/support">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
