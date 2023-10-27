const ResumeButton = ({ SVGSource, text }) => {
  return (
    <button className="flex flex-col items-center justify-center bg-white rounded-lg p-2 ">
      {SVGSource}
      <p>{text}</p>
    </button>
  );
};

export default ResumeButton;
