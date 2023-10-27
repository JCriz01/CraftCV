import Header from "./Header";
import Resume from "./Resume";
import Resume_fillings from "./Resume_fillings";
import React, { useState } from "react";

const App = () => {
  const [resumeTemplate, setResumeTemplate] = useState("Personal Info");

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row  ">
        <Resume_fillings state={setResumeTemplate} />
        <Resume state={resumeTemplate} />
        <div className="">
          <h1 className="text-lg">Resume Settings</h1>
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
