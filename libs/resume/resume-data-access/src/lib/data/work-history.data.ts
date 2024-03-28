import {History} from "../models/history.model";

export const educationHistory: History[] = [
  {
    institution: 'Curo Aurora',
    endDate: 'November 2010',
    position: 'Matric'
  }
]

export const workHistory: History[] = [
  {
    institution: "aYo Holdings",
    startDate: "April 2021",
    endDate: "",
    position: "Senior Angular developer",
    location: "Johannesburg, South Africa",
    type: "Remote",
    description: "Worked on several different angular apps within the ayo holdings ecosystem.\nProvided benefit to both customers and internal users by developing\nnew features and fixing bugs.\nHelped architect and implement a micro-frontend monorepo system\nto build various business portals.\nHelped architect the monorepo system for the new PWA to make it\neasier to share code among countries.",
    skills: [
      "HTML",
      "CSS",
      "Angular",
      "Typescript",
      "Jenkins",
      "Kubernetes",
      "Agile"
    ]
  },
  {
    institution: "Solinta",
    startDate: "October 1018",
    endDate: "March 2021",
    position: "Angular developer",
    location: "Johannesburg, South Africa",
    type: "Hybrid",
    description: "Worked on a grant management app for the US Embassy. Functions included:\nSeveral application forms for organizations to apply for funding.\nAn in-depth application review process to allow the funder to shortlist applicants according to varied criteria\nA reporting system to manage the grant once the organizations have received the money. This includes reporting on their financials, as well as reporting on the how they are achieving their goals.\nThe app was built with an Angular frontend utilizing bootstrap for style and a Java Spring backend.",
    skills: [
      "HTML",
      "CSS",
      "Angular",
      "Typescript"
    ]
  },
  {
    institution: "Spring Apps",
    startDate: "July 1017",
    endDate: "September 2018",
    position: "Junior Frontend developer",
    location: "Johannesburg, South Africa",
    type: "Hybrid",
    description: "I worked in several frontend technologies to satisfy the demands of the company's clients. Most of my time was spent working in php with Wordpress, but I gained a solid understanding and respect of CSS and HTML as well.",
    skills: [
      "HTML",
      "CSS",
      "Wordpress",
      "PHP",
      "Javascript",
      "FTP"
    ]
  }
]

