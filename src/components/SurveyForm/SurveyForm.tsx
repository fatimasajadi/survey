import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IQuestion } from "../../types";
import Question from "../Question/Question";

interface Props {
  questions: IQuestion[];
  initialValues?: Record<number, number>;
  onSubmit(answers: Record<number, number>): void;
}

function SurveyForm({ questions, initialValues, onSubmit }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<number, number | undefined>
  >({});

  const handleOptionSelect = useCallback(
    (questionId: number, index: number) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [questionId]: index,
      }));
    },
    []
  );

  const { control, handleSubmit, errors } = useForm();

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {questions.map((question) => (
          <Controller
            key={question.question}
            as={Question}
            name={`${question.id}`}
            defaultValue={initialValues ? initialValues[question.id] : null}
            control={control}
            onChange={(index: number) => handleOptionSelect(question.id, index)}
            value={selectedOptions[question.id]}
            rules={{ required: true }}
            error={errors[question.id]}
            {...question}
          />
        ))}
        <button className="btn btn-primary">Next</button>
      </form>
    </div>
  );
}

export default SurveyForm;
