import React from "react";

import { connect } from "react-redux";
import { therapist_logout } from "../../actions/therapistAuth";
import logo from "../../assets/images/logo.png";
const TherapistRejected = ({ therapist_logout }) => {
  return (
    <div className=" w-2/3 lg:w-1/3 mt-24 mx-auto  h-screen bg-soul_bg font-Nunito ">
      {
        <>
          <div className="w-44 h-24 mx-auto">
            <img src={logo} alt="" />
          </div>
          <div className="mx-auto mt-25  w-4/5 font-Nunito">
            <h4 className=" text-xl bold my-2 text-center ">
              Sorry <span className="text-soul-300">soul </span> staff Rejected
              you
            </h4>
            <div className="w-44 h-24 mx-auto">
              <button
                className=" text-xl bold my-2 text-center align-center"
                onClick={() => therapist_logout()}
              >
                <span className="text-soul-300">LOGOUT </span>
              </button>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default connect(null, { therapist_logout })(TherapistRejected);
