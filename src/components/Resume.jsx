import React, {useState} from "react";
import {modifyPDF} from "./CreatePDF.js";

const PersonalInfoForm = ({formState, setFormState}) => {
  return (
    <>
      <div className="self-start ">Personal Info</div>
      <div className="flex flex-col justify-center  flex-wrap xl:flex-row lg:w-11/12 lg:justify-between w-4/5">
        <div className="flex flex-col items-center">
          <p>First Name</p>
          <input className="bg-zinc-100 p-1" type="text"
          value={formState.person.firstName}
          onChange={e=>
          {setFormState({...formState, person: {...formState.person, firstName: e.target.value}})}}
          />
        </div>

        <div className="flex flex-col items-center">
          <p>Last Name</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
      </div>

      <div className="flex flex-col   flex-wrap xl:flex-row lg:w-11/12 lg:justify-between w-4/5">
        <div className="flex flex-col items-center">
          <p>Age</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
        <div className="flex flex-col items-center">
          <p>Country</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
      </div>
      <div></div>

      <div></div>

      <textarea
        className="m-3 bg-zinc-100 rounded-lg"
        name="resume_area"
        id="resumeText"
        cols="30"
        rows="9"
        placeholder="Placeholder text"
      ></textarea>
    </>
  );
};

const SummaryForm = () => {
  return (
    <>
      <div className="self-start ">Summary</div>

      <div className="flex flex-col justify-center  flex-wrap xl:flex-row lg:w-11/12 lg:justify-between w-4/5">
        <div className="flex flex-col items-center">
          <p>First Name</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>

        <div className="flex flex-col items-center">
          <p>Placeholder</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
      </div>

      <div className="flex flex-col   flex-wrap xl:flex-row lg:w-11/12 lg:justify-between w-4/5">
        <div className="flex flex-col items-center">
          <p>Placeholder</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
        <div className="flex flex-col items-center">
          <p>Placeholder</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
      </div>
      <div></div>

      <div></div>

      <textarea
        className="m-3 bg-zinc-100 rounded-lg"
        name="resume_area"
        id="resumeText"
        cols="30"
        rows="9"
        placeholder="Placeholder text"
      ></textarea>
    </>
  );
};

const WorkExperienceForm = () => {
  return (
    <>
      <div className="self-start ">Work Experience</div>

      <div className="flex flex-col justify-center  flex-wrap xl:flex-row lg:w-11/12 lg:justify-between w-4/5">
        <div className="flex flex-col items-center">
          <p>First Name</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>

        <div className="flex flex-col items-center">
          <p>Placeholder</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
      </div>

      <div className="flex flex-col   flex-wrap xl:flex-row lg:w-11/12 lg:justify-between w-4/5">
        <div className="flex flex-col items-center">
          <p>Placeholder</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
        <div className="flex flex-col items-center">
          <p>Placeholder</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
      </div>
      <div></div>

      <div></div>

      <textarea
        className="m-3 bg-zinc-100 rounded-lg"
        name="resume_area"
        id="resumeText"
        cols="30"
        rows="9"
        placeholder="Placeholder text"
      ></textarea>
    </>
  );
};

const EducationForm = () => {
  return (
    <>
      <div className="self-start ">Education</div>

      <div className="flex flex-col justify-center  flex-wrap xl:flex-row lg:w-11/12 lg:justify-between w-4/5">
        <div className="flex flex-col items-center">
          <p>First Name</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>

        <div className="flex flex-col items-center">
          <p>Placeholder</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
      </div>

      <div className="flex flex-col   flex-wrap xl:flex-row lg:w-11/12 lg:justify-between w-4/5">
        <div className="flex flex-col items-center">
          <p>Placeholder</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
        <div className="flex flex-col items-center">
          <p>Placeholder</p>
          <input className="bg-zinc-100 p-1" type="text" />
        </div>
      </div>
      <div></div>

      <div></div>

      <textarea
        className="m-3 bg-zinc-100 rounded-lg"
        name="resume_area"
        id="resumeText"
        cols="30"
        rows="9"
        placeholder="Placeholder text"
      ></textarea>
    </>
  );
};

const LanguageForm = () =>{


  return(
    <>

    </>
  )
}

const CourseForm = () =>{
  return(
    <>

    </>
  )
}

const SkillsForm = () =>{
  return(
    <>

    </>
  )
}

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
  switch (state) {
    case "Personal Info":

      CurrentForm = <PersonalInfoForm formState={formInputs} setFormState={setFormInputs} />;
      //PDFFunction=()=>fullName(pdfSource,setPDFSource, formInputs.person);
      break;
    case "Summary":
      CurrentForm = <SummaryForm />;
      break;
    case "Work Experience":
      CurrentForm = <WorkExperienceForm />;
      break;
    case "Education":
      CurrentForm = <EducationForm />;
      break;
    case "Language":
      CurrentForm = <LanguageForm />;
      break;
    case "Course":
      CurrentForm = <CourseForm />;
      break;
    case "Skills":
      CurrentForm = <SkillsForm />;
      break;
  }

  function handleName(obj){
    console.log(obj);
  }

  const handlePDF = async (Event) =>{
    console.log('PDF');
  }

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