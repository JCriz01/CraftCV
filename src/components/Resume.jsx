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
      <div className="bg-white w-96 h-[540px] ">
      </div>
  );
};

export default Resume;