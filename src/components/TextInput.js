import React from "react";

function TextInput({ id, name, type, value, onChange, onBlur, error }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          required
          autoComplete={name}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
}

export default TextInput;
