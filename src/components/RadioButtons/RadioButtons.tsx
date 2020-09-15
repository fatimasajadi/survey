import React from "react";

interface Option {
  value: any;
  label: string;
}

interface Props {
  options: Option[];
  value: any;
  onChange(value: any): void;
}

function RadioButtons({ options, value, onChange }: Props) {
  return (
    <div className="btn-group" data-toggle="buttons">
      {options.map((option) => (
        <label
          key={option.value}
          className={`btn btn-primary ${
            value === option.value ? "active" : ""
          }`}
        >
          <input
            type="radio"
            onChange={() => onChange(option.value)}
            checked={value === option.value}
          />{" "}
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default RadioButtons;
