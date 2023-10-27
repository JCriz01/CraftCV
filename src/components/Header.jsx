const iconSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    />
  </svg>
);

const Header = () => {
  return (
    <div className="flex items-center justify-center ">
      {iconSvg}
      <div>
        <h1 className="text-xl lg:text-2xl">Resume</h1>
        <p className="lg:text-lg">Builder</p>
      </div>
    </div>
  );
};

export default Header;
