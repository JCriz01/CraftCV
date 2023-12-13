import react from "react";
import ResumeCard from "./ResumeCard";
import PersonInfoForm from "./PersonInfoForm";
 
const CVOptions=({setPersonInfo})=>{

  const personForm = <PersonInfoForm setPersonInfo={setPersonInfo}/>
  return(
    <div className="flex flex-col items-center w-3/4">

      <ResumeCard FormSection={personForm} svgSource={"/personal_info.svg"} headerText={"Personal Information"}/>
      <ResumeCard FormSection={"WIP"} svgSource={"/education.svg"} headerText={"Education"}/>
      <ResumeCard FormSection={"WIP"} svgSource={"/experience.svg"} headerText={"Experience"}/>
    </div>
  )
}

export default CVOptions;