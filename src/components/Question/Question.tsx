import React from "react";

import "./Question.scss";

interface Props {
  question: string;
  id: number;
  options: string[];
  value?: number;
  onChange(index: number): void;
  error?: boolean;
}

function Question({ question, options, id, value, onChange, error }: Props) {
  return (
    <div className="QuestionContainer">
      <p>
        {id}. {question}
      </p>
      {error && (
        <small className="text-danger">This is a required question</small>
      )}
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                onChange={() => onChange(index)}
                type="radio"
                name={`question-${id}`}
                checked={value === index}
              />{" "}
              <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
