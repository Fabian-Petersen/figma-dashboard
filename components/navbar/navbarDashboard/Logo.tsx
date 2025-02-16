import { PieChart } from "lucide-react";

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
        <div className="bg-clr_primary_900 rounded-sm py-4 flex justify-center items-center gap-4">
          <PieChart size={32} color="#fff" />
          <p className="text-white text-lg tracking-wider">Dashboard</p>
        </div>
      )}
    </div>
  );
};

export default Logo;
