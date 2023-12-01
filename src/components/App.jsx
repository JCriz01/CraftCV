import Header from "./Header";
import Resume from "./Resume";
import Resume_Settings from "./Resume_Settings";
import React, {useEffect, useState} from "react";
import {LoadPDF} from "./PDF.js";
import {PDF} from "./PDF.js";
const App = () => {

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-2 m-3 ">
        <Resume_Settings/>
        <Resume/>
      </div>
    </>
  );
};

export default App;
