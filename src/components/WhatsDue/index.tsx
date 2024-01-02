import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Typography } from "@mui/material";
import { t } from "i18next";
import Button from "../Button";
import { AssignData, QuizData } from "../Data";

const WhatsDue = () => {
  const renderQuizzes = QuizData.map((quiz) => {
    return (
      <div className="flex gap-x-1">
        <p className="text-gray-400 text-sm ">{quiz.attribute}:</p>
        <p className="text-gray-400 text-sm ">{quiz.value}</p>
      </div>
    );
  });

  const renderAssignData = AssignData.map((assignment) => {
    return (
      <div className="flex gap-x-1">
        <p className="text-gray-400 text-sm ">{assignment.attribute}:</p>
        <p className="text-gray-400 text-sm ">{assignment.value}</p>
      </div>
    );
  });
  return (
    <>
      <div className="bg-white p-2 pb-2 border-b-2 border-gray-300 ">
        <div className="pb-6">
          <div className="flex justify-between">
            <h1>{t("WhatsDue")}</h1>
            <a
              href="#"
              style={{ textDecoration: "none" }}
              className="text-indigo-400"
            >
              {t("all")}
            </a>
          </div>

          <div>
            <p className="text-gray-400 text-sm md:text-xs">{t("lorem")}</p>
          </div>
        </div>
        <div className="grid gap-y-1">
          <div
            className="flex gap-x-1 "
            style={{
              textAlign: "center",
            }}
          >
            <HourglassEmptyIcon
              color={"info"}
              style={{
                fontSize: "26px",
              }}
            />
            <Typography>{t("quiz")}</Typography>
          </div>
          {renderQuizzes}
          <Button className="border border-indigo-400 text-indigo-700 my-3 w-full">
            {t("start.quiz")}
          </Button>
        </div>
      </div>
      <br></br>
      <div
        className=" p-2 grid gap-y-1 "
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="">
          <div className="flex space-x-1">
            <TextSnippetIcon
              color={"info"}
              style={{
                fontSize: "26px",
              }}
            />
            <Typography>{t("assign")}</Typography>
          </div>
        </div>
        <div className="grid gap-y-1">
          {renderAssignData}

          <Button className="border border-indigo-400 text-indigo-700 my-3 w-full">
            {t("solve.assign")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default WhatsDue;
