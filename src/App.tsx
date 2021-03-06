import React, { useState } from "react";
import "./App.css";
import { ReactComponent as Flag } from "./assets/canada-flag.svg";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import StartSurveyForm from "./components/StartSurveyForm/StartSurveyFrom";
import SurveyForm from "./components/SurveyForm/SurveyForm";
import { IQuestion } from "./types";

const questions: IQuestion[] = [
  {
    id: 1,
    question:
      "My physical environment (e.g., office, workspace) is suitable for my job requirements.",
    options: [
      "Strongly agree",
      "Somewhat agree",
      "Neither agree nor disagree",
      "Somewhat disagree",
      "Strongly disagree",
      "Don't know",
      "Not applicable",
    ],
  },
  {
    id: 2,
    question:
      "I have the information, training and equipment I need to ensure my health and safety at work.",
    options: [
      "Strongly agree",
      "Somewhat agree",
      "Neither agree nor disagree",
      "Somewhat disagree",
      "Strongly disagree",
      "Don't know",
      "Not applicable",
    ],
  },
];

enum View {
  Start = 0,
  Questions = 1,
  Review = 2,
}

function App() {
  // const [language, setLanguage] = useState<"en" | "fr">();
  // const [type, setType] = useState<number>();
  const [answers, setAnswers] = useState<Record<number, number>>();
  const [view, setView] = useState(View.Start);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="brand">
            <Flag className="mr-2" />
            <h2>Sample Survey</h2>
          </div>
        </div>
        <div className="gcweb-v2 gcweb-menu wb-init gcweb-menu-inited mb-2"></div>
      </header>
      {submitted && (
        <div className="container">
          <div>
            <div className="alert alert-success">
              Form sucessfully submitted
            </div>
          </div>
        </div>
      )}

      {view === View.Start && (
        <StartSurveyForm
          onSubmit={(data) => {
            // setLanguage(data.language);
            // setType(data.type);
            setView(View.Questions);
          }}
        />
      )}

      {view === View.Questions && (
        <SurveyForm
          questions={questions}
          onSubmit={(answers) => {
            setAnswers(answers);
            setView(View.Review);
          }}
          initialValues={answers}
        />
      )}

      {view === View.Review && answers && (
        <ReviewForm
          quesitons={questions}
          answers={answers}
          onBack={() => {
            setView(View.Questions);
          }}
          onSubmit={() => {
            setSubmitted(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
