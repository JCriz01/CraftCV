import React, { useState } from 'react';

const ResumeCard = ({FormSection, svgSource, headerText}) => {

  console.log(FormSection);

  const [clicked, setClicked] = useState(false);

  const expandMoreSVG=<img width={24} src="/expand_more.svg" alt="" className=" transition-transform transform rotate-0 " />
  const expandLessSVG=<img width={24} src="/expand_less.svg" alt="" className=" transition-transform transform rotate-180 " />

  const handleClick=()=>{
    setClicked(!clicked);
  }
  //TODO: Fix svg arrow rotation animation
  return(
    <div className="flex flex-col items-center bg-white rounded-xl m-1 w-full ">
      <div className=" p-4 flex justify-between w-full " onClick={handleClick}>
        <div className="flex text text-md font-bold ">
          <img src={svgSource}></img>{headerText} 
        </div>
        {clicked ? expandMoreSVG : expandLessSVG}
      </div>
      {clicked ? FormSection: null}
    </div>
  )
}

export default ResumeCard;