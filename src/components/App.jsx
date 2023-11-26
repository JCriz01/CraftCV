import Header from "./Header";
import Resume from "./Resume";
import Resume_fillings from "./Resume_fillings";
import Resume_Settings from "./Resume_Settings";
import React, {useEffect, useState} from "react";
import {LoadPDF} from "./CreatePDF.js";
import {CreatePDF} from "./CreatePDF.js";
const App = () => {
  const [resumeTemplate, setResumeTemplate] = useState("Personal Info");

  const [pdf, setPdf] = useState( '');

  useEffect(() => {
    const fetchPDFSrc= async () =>{

        const pdfSrc = await CreatePDF();
        setPdf(pdfSrc);
    }
    fetchPDFSrc();

  }, []);

  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row gap-2 m-3 ">
        <Resume_fillings state={setResumeTemplate} />
        <Resume state={resumeTemplate} pdfSource={pdf} setPDFSource={setPdf}/>
        <Resume_Settings />
      </div>

      <iframe
        className="self-center"
        frameBorder="0"
        src={pdf}
        width="100%"
        height="600px"
      ></iframe>
    </>
  );
};

export default App;
