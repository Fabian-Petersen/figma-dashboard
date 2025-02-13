import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

type FormErrorProps = {
  message?: string;
};

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-red-500/10 p-2 rounded-md flex items-center gap-x-2 text-[12px] text-red-500">
      <FaExclamationTriangle className="h4 w-4" />
      <p className="w-full">{message}</p>
    </div>
  );
};

export default FormError;
