export interface IData {
  imgUrl: string;
  imgAlt: string;
  personName: string;
  personDesc: string;
  announce: string;
}
export interface IQuizProp {
  attribute: string;
  value: string;
}
export const AnnounceData: IData[] = [
  {
    imgUrl:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "man Announcement",
    personName: "Mr.Ahmed Mostafa",
    personDesc: "Math 101",
    announce:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor doloribus, magni ea, veniam placeat nemo ut asperiores optio, esse est quod cumque praesentium rerum.",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "woman Announcement",
    personName: "Mrs. Salma Ahmed",
    personDesc: "physuc 02",
    announce:
      "Hello my students, I want to announce that the next duiz will be within 3 days and will cover the whole unit 2: Add and subtract numbers, Study hard Good luck",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "school Announcement",
    personName: "Managemet",
    personDesc: "Math 101",
    announce:
      "Goooooooooood morning, warnors that get ready for the day call it is heard each morning by 850 student at good junior High School in Tagamool,Egypt .I just want you ready to our exams and focus on remaining assignments to gain more grades , Good luck warnors",
  },
  {
    imgUrl:
      "https://images.pexels.com/photos/7983621/pexels-photo-7983621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "man Announcement",
    personName: "Events manager",
    personDesc: "Events",
    announce:
      "hellooooo can't wait our upcoming trip on the next weekend, the trip will be to Dreampark and pyramids , to book your seat please contact your class teacher ",
  },
];

export const QuizData: IQuizProp[] = [
  {
    attribute: "Course",
    value: "Physics 02",
  },
  {
    attribute: "Topic",
    value: "Unit 2 : motion and force",
  },
  {
    attribute: "Due to",
    value: "20 Dec 2017 - 9:00 pm",
  },
];

export const AssignData: IQuizProp[] = [
  {
    attribute: "Course",
    value: "Arabic K12",
  },
  {
    attribute: "Topic",
    value: " الوحده التانيه - الافعال",
  },
  {
    attribute: "Due to",
    value: "20 Dec 2017 - 9:00 pm",
  },
];
