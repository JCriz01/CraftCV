import React, { useState } from 'react';

const Personal_info = () => {

  const [clicked, setClicked] = useState(false);

  const expandMoreSVG=<img width={24} src="/expand_more.svg" alt="" className=" transition-transform transform rotate-180 " />
  const expandLessSVG=<img width={24} src="/expand_less.svg" alt="" className=" transition-transform transform rotate-0 " />

  const handleClick=()=>{
    setClicked(!clicked);
  }

  return(
    <div className="flex flex-col items-center bg-white rounded-xl">
      <div className=" p-4 flex justify-between" onClick={handleClick}>
        <div className="flex text text-md">
          <img src="/personal_info.svg"></img>Personal Information 
        </div>
        {clicked ? expandMoreSVG : expandLessSVG}
      </div>
      {clicked ? (
        <p>WIP</p>
      ): null}
    </div>
  )
}

export default Personal_info;