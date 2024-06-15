import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  array: string[];
}

export const DropDown = forwardRef<HTMLSelectElement, IProps>(
  ({ array, name, error, label, ...props }, ref) => {
    const labelClasses = twMerge(
      "font-semibold text-sm capitalize",
      error && "text-inputError"
    );
    const inputClasses = twMerge(
      "border-2 border-inputBorder outline-none text-sm font-semibold rounded-lg w-full px-4 py-3 mb-1 bg-white transition-colors duration-200 focus:border-accent disabled:bg-gray disabled:cursor-not-allowed",
      error && "!bg-inputError/20"
    );
    return (
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className={labelClasses} htmlFor={name}>
            {label || name}
          </label>
          <p className="text-inputError text-xs font-medium">{error}</p>
        </div>
        <select
          className={inputClasses}
          ref={ref}
          name={name}
          id={name}
          {...props}>
          <option value="" hidden></option>
          {array.map((item, index) => (
            <option className="bg-white" key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
