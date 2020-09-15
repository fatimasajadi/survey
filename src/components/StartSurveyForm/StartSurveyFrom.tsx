import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import RadioButtons from "../RadioButtons/RadioButtons";

interface FormValues {
  language: "en" | "fr";
  type: number;
}

interface Props {
  onSubmit(data: FormValues): void;
}

interface Errors {
  language?: string;
  type?: string;
}

function StartSurveyForm({ onSubmit }: Props) {
  const { errors, control, handleSubmit } = useForm<FormValues>();
  const [language, setLanguage] = useState<"en" | "fr">();
  const [type, setType] = useState<number>();

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Choose your preferred language</label>

          <div>
            <Controller
              as={RadioButtons}
              name="language"
              control={control}
              rules={{ required: true }}
              value={language}
              onChange={setLanguage}
              defaultValue={null}
              options={[
                { label: "English", value: "en" },
                { label: "French", value: "fr" },
              ]}
            />

            {errors.language && (
              <div>
                <small className="text-danger">Language is required</small>
              </div>
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Type of user</label>

          <div>
            <Controller
              as={RadioButtons}
              name="type"
              control={control}
              rules={{ required: true }}
              defaultValue={null}
              options={[
                { label: "Recreational", value: 0 },
                { label: "Commercial", value: 1 },
              ]}
              value={type}
              onChange={setType}
            />
            {errors.type && (
              <div>
                <small className="text-danger">Type is required</small>
              </div>
            )}{" "}
          </div>
        </div>
        <button className="btn btn-call-to-action">Start</button>
      </form>
    </div>
  );
}

export default StartSurveyForm;
