import React from "react";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex items-center w-96 h-10 pl-6 pr-8 py-2 border border-gray-300 rounded-lg bg-white shadow-sm ml-auto">
      {/* Search Icon */}
      <Search className="w-5 h-5 text-gray-500" />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search here..."
        className="ml-3 flex-1 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
