
import Resume from "./Resume";
import Resume_Settings from "./Resume_Settings";
import CVOptions from "./CVOptions";
import CustomizeResume from "./CustomizeResume";
import React, {useEffect, useState} from "react";
import {LoadPDF} from "./PDF.js";
import {PDF} from "./PDF.js";
const App = () => {

  const [isContentCLicked, setIsContentClicked] = useState(true);

  const [personInfo, setPersonInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: ""
  });

  const [education, setEducation] = useState({
    degree: "",
    school: "",
    city: "",
    Country: "",
    startDate: "",
    endDate: "",
  });

  const [experience, setExperience] = useState({
    jobTitle: "",
    company: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  return (
    <div className="flex flex-col md:flex-row gap-2 m-3 align-center items-center">
      <Resume_Settings setState={setIsContentClicked}/>
      {isContentCLicked ? <CVOptions setPersonInfo={setPersonInfo} /> : <CustomizeResume/>}
      <Resume/>
    </div>
  );
};

export default App;
