
import Resume from "./Resume";
import Resume_Settings from "./Resume_Settings";
import CVOptions from "./CVOptions";
import React, {useEffect, useState} from "react";
import {LoadPDF} from "./PDF.js";
import {PDF} from "./PDF.js";
const App = () => {

  return (
    <div className="flex flex-col md:flex-row gap-2 m-3 align-center items-center">
      <Resume_Settings />
      <CVOptions/>
      <Resume/>
    </div>
  );
};

export default App;
