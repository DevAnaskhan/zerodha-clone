// import React from "react";

// function Signup() {
//   return (
//     <div className="container">
//       <div className="row p-5 mb-2 mt-5">
//         <h1 className="fs-2 text-center">
//           Open a free demat and trading account online
//         </h1>
//         <p className="fs-4 text-center text-muted">
//           Start investing brokerage free and join a community of 1.6+ crore
//           investors and traders
//         </p>
//       </div>

//       <div className="row " style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
//         <div className="col-md-6 p-5">
//           <img src="/media/images/signup.png" alt="" />
//         </div>
//         <div className="col-md-6 p-5">
//           <h1 className="fs-3">Signup now</h1>
//           <p className="fs-5 text-muted">Or track your existing application</p>
//           <form>
//             <textarea></textarea>
//             <button type="button" class="btn btn-primary">Primary</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";

function Signup() {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting number:", mobileNumber);
    // Add your API logic here
  };

  return (
    <div className="container">
      <div className="row p-5 mb-2 mt-5">
        <h1 className="fs-2 text-center">
          Open a free demat and trading account online
        </h1>
        <p className="fs-4 text-center text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="row" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
        <div className="col-md-6 p-5">
          <img
            src="/media/images/signup.png"
            alt="Signup Illustration"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 p-5">
          <h1 className="fs-3">Signup now</h1>
          <p className="fs-5 text-muted">Or track your existing application</p>

          {/* Form Setup */}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label fs-6 text-muted">
                Mobile Number
              </label>

              {/* Textarea Input */}
              <textarea
                id="mobile"
                className="form-control"
                rows="2"
                placeholder="Enter phone number(s)"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              ></textarea>
            </div>

            {/* Action Button */}
            <button type="submit" className="btn btn-primary btn-lg py-2">
              Get OTP
            </button>
          </form>

          {/* Additional Terms Link */}
          <p className="fs-6 text-muted mt-3">
            By proceeding, you agree to the{" "}
            <a href="" style={{ textDecorationLine: "none" }}>
              terms
            </a>{" "}
            &{" "}
            <a href="" style={{ textDecorationLine: "none" }}>
              privacy
            </a>{" "}
            policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
