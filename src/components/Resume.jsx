import React from "react";
import { testing, outputPDF, addName } from "./PDF";
const PersonalInfoForm = () => {
  return (
    <div className="bg-white flex flex-col items-center p-2 rounded-lg">
      <div className="self-start ">Personal Info</div>

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
      <button className="p-3 text-base rounded-md bg-red-800 text-white">
        test
      </button>
    </div>
  );
};

const SummaryForm = () => {
  return (
    <div className="bg-white flex flex-col items-center p-2 rounded-lg">
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
      <button className="p-3 text-base rounded-md bg-red-800 text-white">
        test
      </button>
    </div>
  );
};

const WorkExperienceForm = () => {
  return (
    <div className="bg-white flex flex-col items-center p-2 rounded-lg">
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
      <button className="p-3 text-base rounded-md bg-red-800 text-white">
        test
      </button>
    </div>
  );
};

const EducationForm = () => {
  return (
    <div className="bg-white flex flex-col items-center p-2 rounded-lg">
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
      <button className="p-3 text-base rounded-md bg-red-800 text-white">
        test
      </button>
    </div>
  );
};

const Resume = ({ state, src }) => {
  let formTitle, formLabel1, formaLabel2, formLabel3, formLabel4;

  switch (state) {
    case "Personal Info":
      formTitle = "Personal Info";
      formLabel1 = "First Name";
      formaLabel2 = "Last Name";
      formLabel3 = "Email";
      formLabel4 = "Phone Number";

      break;
    case "Summary":
      formTitle = "Summary";
      break;
    case "Work Experience":
      formTitle = "Work Experience";
      formLabel1 = "Work Name";
      formaLabel2 = "Work Title";
      break;
    case "Education":
      formTitle = "Education";
      formLabel1 = "Insitution Name";
      formaLabel2 = "Field of Study";
      formLabel3 = "Country";
      formLabel4 = "City";
      break;
    case "Language":
      formTitle = "Language";
      break;
    case "Course":
      formTitle = "Course";
      break;
    case "Skills":
      formTitle = "Skills";
      break;
  }

  const handleName = (Event) => {
    addName(Event.target.value);
    src(outputPDF());
  };

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
          <div className="self-start ">{formTitle}</div>

          <div className="flex flex-col justify-center  flex-wrap xl:flex-row lg:w-11/12 lg:justify-between w-4/5">
            <div className="flex flex-col items-center">
              <p>{formLabel1}</p>
              <input
                onChange={handleName}
                className="bg-zinc-100 p-1"
                type="text"
              />
            </div>

            <div className="flex flex-col items-center">
              <p>{formaLabel2}</p>
              <input className="bg-zinc-100 p-1" type="text" />
            </div>
          </div>

          <div className="flex flex-col   flex-wrap xl:flex-row lg:w-11/12 lg:justify-between w-4/5">
            <div className="flex flex-col items-center">
              <p>{formLabel3}</p>
              <input className="bg-zinc-100 p-1" type="text" />
            </div>
            <div className="flex flex-col items-center">
              <p>{formLabel4}</p>
              <input className="bg-zinc-100 p-1" type="text" />
            </div>
          </div>
          {state === "Education" && <div></div>}

          <textarea
            className="m-3 bg-zinc-100 rounded-lg"
            name="resume_area"
            id="resumeText"
            cols="30"
            rows="9"
            placeholder="Placeholder text"
          ></textarea>
          <button className="p-3 text-base rounded-md bg-red-800 text-white">
            Preview
          </button>
        </div>
        {/*  Resume Template */}
      </div>
    </>
  );
};

export default Resume;
