import React from "react";
import { Upload } from "lucide-react";

function Export() {
  return (
    <button className="flex gap-2 border border-clr_blueGray_600 p-1 rounded-md text-sm items-center justify-center">
      <Upload size={16} />
      <p>Export</p>
    </button>
  );
}

export default Export;
