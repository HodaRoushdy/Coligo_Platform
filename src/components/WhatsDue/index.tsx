import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Typography } from "@mui/material";
import { t } from "i18next";
import { useEffect, useState } from "react";
import Button from "../Button";
import { AssignData, IQuizProp } from "../Data";
interface IResData {
  allQuizzes: IQuizProp[];
}
interface IWrapper {
  status: string;
  data: IResData;
}
const WhatsDue = () => {
  const [quizzes, setQuizzes] = useState<IQuizProp[]>([]);

  useEffect(() => {
    if (!quizzes.length) {
      fetch("http://localhost:3000/api/quizzes/")
        .then(async (res) => {
          return await res.json();
        })
        .then((data: IWrapper) => {
          setQuizzes(data.data.allQuizzes);
        });
    }
  }, [quizzes]);

  const renderQuizzes = quizzes.map((quiz) => {
    return (
      <>
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

        <div className="flex gap-x-1">
          <p className="text-gray-400 text-sm ">{t("course")}:</p>
          <p className="text-gray-400 text-sm ">{quiz.course}</p>
        </div>
        <div className="flex gap-x-1">
          <p className="text-gray-400 text-sm ">{t("topic")}:</p>
          <p className="text-gray-400 text-sm ">{quiz.topic}</p>
        </div>
        <div className="flex gap-x-1">
          <p className="text-gray-400 text-sm ">{t("dueTo")}:</p>
          <p className="text-gray-400 text-sm ">{quiz.dueTo}</p>
        </div>
        <Button className="border border-indigo-400 text-indigo-700 my-3 w-full">
          {t("start.quiz")}
        </Button>
      </>
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
        <div className="grid gap-y-2">{renderQuizzes}</div>
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
        <div className="grid gap-y-2">
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
