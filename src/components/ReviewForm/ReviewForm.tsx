import React, { useState } from "react";
import { IQuestion } from "../../types";

interface Props {
  quesitons: IQuestion[];
  answers: Record<number, number>;
  onBack?(): void;
  onSubmit?(): void;
}

function ReviewForm(props: Props) {
  const [showActions, setShowActions] = useState(true);
  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">Review your submission</div>
        <div className="panel-body">
          {props.quesitons.map((question) => (
            <div key={question.id}>
              <h5>{question.question}</h5>
              <div>{question.options[props.answers[question.id]]}</div>
            </div>
          ))}
        </div>
      </div>

      {showActions && (
        <div className="row mt-2">
          <div className="col-xs-6">
            <button className="btn btn-secondary" onClick={props.onBack}>
              Back
            </button>
          </div>
          <div className="col-xs-6 text-right">
            <button
              className="btn btn-primary"
              onClick={() => {
                setShowActions(false);
                if (props.onSubmit) {
                  props.onSubmit();
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
