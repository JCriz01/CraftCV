import React from "react";

const Resume = ({ state }) => {
  return (
    <>
      <div className=" ">
        <h1 className="text-lg">Resume Template</h1>
        <p>
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos ea a
          quia quod voluptatum voluptatibus, voluptas, quibusdam dolorum quae
        </p>

        <div className="bg-white flex flex-col items-center">
          <div className=""></div>
          <div className="flex flex-col  flex-wrap lg:flex-row lg:w-11/12 lg:justify-between w-4/5">
            <div>
              <p>Placeholder</p>
              <input className="bg-zinc-100 p-1 w-9/12 " type="text" />
            </div>
            <div>
              <p>Placeholder</p>
              <input className="bg-zinc-100 p-1 w-9/12" type="text" />
            </div>
          </div>
          <div className="flex flex-col  flex-wrap lg:flex-row lg:w-11/12 lg:justify-between w-4/5">
            <div>
              <p>Placeholder</p>
              <input className="bg-zinc-100 p-1 w-9/12" type="text" />
            </div>
            <div>
              <p>Placeholder</p>
              <input className="bg-zinc-100 p-1 w-9/12" type="text" />
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
      </div>
    </>
  );
};

export default Resume;
