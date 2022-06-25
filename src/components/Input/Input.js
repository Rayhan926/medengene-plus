import React, { useId } from "react";

const Input = ({ id, label, className = "", icon, ...props }) => {
  const inputId = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-dark-700 mb-3">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          className={`${className} __input ${icon ? "pl-[60px]" : ""}`}
          {...props}
        />

        {icon && (
          <div className="absolute text-primary top-0 left-0 h-full flex items-center pl-6 pr-4">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
