
//TODO: Hard coding the resume settings for now. Will be updated later.
const Resume_Settings = () => {
  return (
    <div className={"bg-white rounded-md p-3 flex flex-col justify-between items-center "}>
      <button className=" m-2 rounded-md p-3 bg-slate-200 active:bg-slate-300 text-base text-center flex flex-col items-center">
        <img width={24} src="/content.svg"></img>Content
      </button>
      <button className=" m-2 rounded-md p-3 bg-slate-200 active:bg-slate-300 text-base text-center flex flex-col items-center">

        <img width={24} src="/customize.svg"></img>Customize
      </button>
      <button className=" 
          m-2 rounded-md bg-gradient-to-r from-indigo-950 via-pink-900 to-rose-600 text-white p-3 text-base 
           active:bg-gradient-to-r active:from-indigo-900 active:via-pink-950 active:to-rose-900 text-center flex flex-col items-center">
        <img width={24} src="/download.svg"></img>Download
        
      </button>
    </div>
  );
};

export default Resume_Settings;
