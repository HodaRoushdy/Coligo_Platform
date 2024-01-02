import { ButtonHTMLAttributes, ReactNode } from "react";


export type widthType = "w-full" | "w-fit";
export interface IDrawerData {
  id: string | null;
  element: ReactNode;
}

export interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: widthType;
}
export interface IData {
  image: string;
  imgAlt: string;
  name: string;
  desc: string;
  annoucement: string;
}
export interface IQuizProp {
  course: string;
  dueTo: string;
  topic: string;
}

export interface IAssignmentProp {
  attribute: string;
  value: string;
}

export interface IOneAnnounceProps {
  announcement: IData;
  index?: number;
}

export interface IHeaderProps {
  handleDrawerToggle: () => void;
}
export interface IStateProps {
  isLoggedIn: boolean;
}


export interface IQuizResData {
  allQuizzes: IQuizProp[];
}
export interface IQuizWrapper {
  status: string;
  data: IQuizResData;
}
export interface IAnnounceWrapper {
  status: string;
  data: IAnnResData;
}
export interface IAnnResData {
  allAnnoucements: IData[];
}

export interface IResWrapper<T> {
  status: string;
  data:T
}


export interface IImgProps {
  url: string;
  alt: string;
  className: string;
}