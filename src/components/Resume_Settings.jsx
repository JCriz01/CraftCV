
//TODO: Hard coding the resume settings for now. Will be updated later.
const Resume_Settings = () => {
  return (
    <div className="flex flex-col">
      <div className={"bg-white rounded-md p-3 flex flex-col justify-between items-center "}>
        <button className="p-2 bg-slate-200 hover:bg-slate-300 ">
          Content
        </button>
        <button className="p-2 bg-slate-200 hover:bg-slate-300">
          Customize
        </button>
        <button className="bg-gradient-to-r from-indigo-950 via-pink-900 to-rose-600 text-white p-2">
          Save
        </button>
      </div>
    </div>
  );
};

export default Resume_Settings;
