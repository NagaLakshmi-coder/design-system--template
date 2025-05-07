import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  icon,
  disabled,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div
        className={`flex items-center px-3 py-2 border rounded-md transition-all ${
          error
            ? 'border-red-500 focus-within:border-red-600'
            : 'border-gray-300 focus-within:border-blue-500'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${className}`}
      >
        {icon && <span className="mr-2 text-gray-500">{icon}</span>}
        <input
          disabled={disabled}
          className="w-full bg-transparent outline-none text-sm text-gray-800 disabled:cursor-not-allowed"
          {...props}
        />
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
