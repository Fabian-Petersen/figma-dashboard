type LogoProps = {
  variant?: "navbar" | "sidebar";
};

const Logo = ({ variant }: LogoProps) => {
  return (
    <div className="tracking-wide">
      {variant === "navbar" ? (
        <div className="tracking-wider text-gray-800 text-[2rem] font-extrabold">
          Dashboard
        </div>
      ) : (
        <p className="text-gray-800 font-greatvibes tracking-wider text-[2rem] text-center w-full border border-green-500">
          <span
            className={`font-extrabold text-gray-700 dark:text-gray-700
            `}
          >
            P
          </span>
          ortfolio
          <span className="text-gray-700">.</span>
          <span className="text-gray-700">.</span>
          <span className="text-gray-700">.</span>
        </p>
      )}
    </div>
  );
};

export default Logo;
