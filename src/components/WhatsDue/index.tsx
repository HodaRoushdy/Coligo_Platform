import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { t } from "i18next";
import Button from "../Button";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const WhatsDue = () => {
    return (
      <div >
        <div className=" border-b-2 border-gray-300 ">
          <div className="flex flex-col">
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
          </div>

          <div className="flex flex-col">
            <div className="flex space-x-1">
              <HourglassEmptyIcon />
              <h3>{t("quiz")}</h3>
            </div>
            <div className="flex space-x-1">
              <h5>{t("topic")}:</h5>
              <p>Unit 2 : motion and force</p>
            </div>
            <div className="flex space-x-1">
              <h5>{t("dueTo")}:</h5>
              <p>20 Dec 2017 - 9:00 pm</p>
            </div>
            <div className="flex space-x-1">
              <h5>{t("course")}:</h5>
              <p>Physics 02</p>
            </div>
            <Button className="border border-indigo-400 text-indigo-700 mb-4">
              Start Quiz
            </Button>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <div className="flex space-x-1">
            <TextSnippetIcon />
            <h3>{t("assign")}</h3>
          </div>
          <div className="flex space-x-1">
            <h5>{t("course")}:</h5>
            <p>Arabic K12</p>
          </div>
          <div className="flex space-x-1">
            <h5>{t("topic")}:</h5>
            <p>Unit 2 : verbs</p>
          </div>
          <div className="flex space-x-1">
            <h5>{t("dueTo")}:</h5>
            <p>20 Dec 2017 - 9:00 pm</p>
          </div>

          <Button className="border border-indigo-400 text-indigo-700 mb-4">
            Solve Assignement
          </Button>
        </div>
      </div>
    );
};

export default WhatsDue;
