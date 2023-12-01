import React, {useState} from "react";
import {modifyPDF} from "./PDF.js";


const Resume = ({ state, pdfSource, setPDFSource }) => {
  let CurrentForm;
  let PDFFunction;
  const [formInputs, setFormInputs] = useState({
    person: {
      firstName: '',
      lastName: '',
      email: '',
      github: '',
    },
    summary: '',
    workExperience: {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    },
    education: {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: '',
    },
    language: '',
    course: [],
    skills: [],
  });
  console.log(formInputs);


  return (
    <>
      <div className=" ">
        <h1 className="text-lg">Resume Template</h1>
        <p>
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos ea a
          quia quod voluptatum voluptatibus, voluptas, quibusdam dolorum quae
        </p>

        {/*  Resume Template */}
        <div className="bg-white flex flex-col items-center p-2 rounded-lg">
          {CurrentForm}
          <button className="p-3 text-base rounded-md bg-red-800 text-white" onClick={()=>modifyPDF(pdfSource,setPDFSource, formInputs)}>
            Preview
          </button>
        </div>
        {/*  Resume Template */}
      </div>
    </>
  );
};

export default Resume;