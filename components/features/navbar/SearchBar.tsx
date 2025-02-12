import React from "react";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex items-center w-96 h-10 pl-6 pr-8 py-2 mr-6 rounded-lg bg-[#FAFBFC] shadow-sm ml-auto">
      {/* Search Icon */}
      <Search className="w-5 h-5 text-clr_primary_900" />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search here..."
        className="ml-3 flex-1 bg-transparent text-[#737791] placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
