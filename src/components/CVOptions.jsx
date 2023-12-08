import react from "react";
import Personal_info from "./Personal_info";

const CVOptions=()=>{
  return(
    <div className="flex flex-col items-center">

      <Personal_info/>
      <div>
        Education
      </div>
      <div>
        Experience
      </div>
    </div>
  )
}

export default CVOptions;