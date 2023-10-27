import React from "react";

const Resume = () => {
  return (
    <>
      <div className=" ">
        <h1>Resume Template</h1>
        <p>
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos ea a
          quia quod voluptatum voluptatibus, voluptas, quibusdam dolorum quae
        </p>

        <div className="bg-white flex flex-col items-center">
          <div className=""></div>
          <div className="flex flex-col  flex-wrap lg:flex-row lg:w-11/12 lg:justify-between">
            <div>
              <p>Placeholder</p>
              <input className="bg-zinc-100 p-1 " type="text" />
            </div>
            <div>
              <p>Placeholder</p>
              <input className="bg-zinc-100 p-1" type="text" />
            </div>
          </div>
          <div className="flex flex-col  flex-wrap lg:flex-row lg:w-11/12 lg:justify-between">
            <div>
              <p>Placeholder</p>
              <input className="bg-zinc-100 p-1" type="text" />
            </div>
            <div>
              <p>Placeholder</p>
              <input className="bg-zinc-100 p-1" type="text" />
            </div>
          </div>
          <div></div>

          <div></div>

          <textarea
            className="m-3 bg-zinc-100"
            name="resume_area"
            id="resumeText"
            cols="30"
            rows="9"
            placeholder="Placeholder text"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Resume;
