import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

function LanguageSelector() {
  return (
    <button className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-100">
      {/* US Flag */}
      <Image
        src="https://flagcdn.com/w40/us.png" // US flag image
        alt="US Flag"
        className="w-6 h-6 rounded-full"
        width={24}
        height={24}
      />
      {/* Language Text */}
      <span className="text-sm font-medium">Eng (US)</span>
      {/* Down Chevron */}
      <ChevronDown className="w-4 h-4" />
    </button>
  );
}

export default LanguageSelector;
