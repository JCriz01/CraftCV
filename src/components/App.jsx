import Header from "./Header";
import Resume from "./Resume";
import Resume_fillings from "./Resume_fillings";
import React from "react";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center ">
        <Resume_fillings />
        <Resume />
        <div className="">
          <h1>Resume Settings</h1>
          <p>
            Please select any settings from this secion, this is test message,
            will probably remove this later
          </p>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default App;
