import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { t } from "i18next";
import Button from "../Button";
import { AssignData, QuizData } from "../Data";

const WhatsDue = () => {
  const renderQuizzes = QuizData.map((quiz) => {
    return (
      <div className="flex space-x-1">
        <h5>{quiz.attribute}:</h5>
        <p>{quiz.value}</p>
      </div>
    );
  });

  const renderAssignData = AssignData.map((assignment) => {
    return (
      <div className="flex space-x-1">
        <h5>{assignment.attribute}:</h5>
        <p>{assignment.value}</p>
      </div>
    );
  });
  return (
    <div className="flex flex-col bg-blue-500">
      <div className="pb-2 border-b-2 border-gray-300 bg-red-500 ">
        <div className="flex justify-between">
          <h1>{t("WhatsDue")}</h1>
          <a
            href="#"
            style={{ textDecoration: "none" }}
            className="text-indigo-400">
            {t("all")}
          </a>
        </div>

        <div>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="flex space-x-1">
          <HourglassEmptyIcon />
          <h3>{t("quiz")}</h3>
        </div>
        {renderQuizzes}
        <Button className="border border-indigo-400 text-indigo-700 mb-4">
          Start Quiz
        </Button>
      </div>

      <div className="pt-5 bg-orange-700">
        <div className="flex space-x-1">
          <TextSnippetIcon />
          <h3>{t("assign")}</h3>
        </div>
        {renderAssignData}

        <Button className="border border-indigo-400 text-indigo-700 mb-4">
          Solve Assignement
        </Button>
      </div>
    </div>
  );
};

export default WhatsDue;
