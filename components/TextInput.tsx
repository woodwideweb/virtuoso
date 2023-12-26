import React from "react";
import cx from "classnames";

type Props = {
  name: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
  className?: string;
} & ({ type: "email" | "text" | "tel" } | { type: "textarea"; rows: number });

const TextInput: React.FC<Props> = (props) => (
  <div className={cx(`flex flex-col gap-1 lg+:gap-2`, props.className)}>
    {props.label && (
      <label
        htmlFor={props.name}
        className="ml-6 xs:ml-8 text-lg lg+:text-xl font-medium text-black/60"
      >
        {props.label}
        {props.required && <span className="ml-1 text-red-700">*</span>}
      </label>
    )}
    {props.type === `textarea` ? (
      <textarea
        rows={props.rows}
        required={props.required}
        className="py-3 xs:py-4 px-6 xs:px-8 text-xl rounded-3xl bg-white/50 hover:bg-white/70 transition-colors duration-200 outline-none border-2 border-transparent focus:border-primary-600 focus:bg-white backdrop-blur-md placeholder:text-black/10"
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
      />
    ) : (
      <input
        required={props.required}
        className="py-3 xs:py-4 px-6 xs:px-8 text-xl rounded-3xl bg-white/50 hover:bg-white/70 transition-colors duration-200 outline-none border-2 border-transparent focus:border-primary-600 focus:bg-white backdrop-blur-md placeholder:text-black/10"
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
      />
    )}
  </div>
);

export default TextInput;
