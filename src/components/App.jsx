import Header from "./Header";
import Resume from "./Resume";
import Resume_fillings from "./Resume_fillings";
import Resume_Settings from "./Resume_Settings";
import React, { useState } from "react";
import { testing, outputPDF } from "./PDF";

const App = () => {
  const [resumeTemplate, setResumeTemplate] = useState("Personal Info");

  let [iFrameSrc, setIFrameSrc] = useState(outputPDF());
  let IframeSrc = outputPDF();

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-2 m-3 ">
        <Resume_fillings state={setResumeTemplate} />
        <Resume state={resumeTemplate} src={setIFrameSrc} />
        <Resume_Settings />
      </div>
      <iframe
        className="self-center"
        src={IframeSrc}
        frameBorder="0"
        width="90%"
        height="600px"
      ></iframe>
    </>
  );
};

export default App;
