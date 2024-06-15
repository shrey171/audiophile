import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const TextInput = forwardRef<HTMLInputElement, IProps>(
  ({ className, name, label, error, ...props }, ref) => {
    const inputClasses = twMerge(
      "border-2 border-inputBorder outline-none text-sm font-semibold rounded-lg w-full px-4 py-3 mb-1 transition-colors duration-200 focus:border-accent",
      error && "bg-inputError/20",
    );

    const labelClasses = twMerge(
      "font-semibold text-sm capitalize",
      error && "text-inputError"
    );

    return (
      <div className={className}>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor={name} className={labelClasses}>
            {label || name}
          </label>
          <p className="text-inputError text-xs font-medium">{error}</p>
        </div>
        <input
          className={inputClasses}
          name={name}
          id={name}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
