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
    description: "Worked on several applications, including both in-house and customer facing.\n" +
      "Led the design and implementation of a micro-frontend monorepo system for the company's in-house portals. This involved creating a unified development environment allowing multiple frontend applications to coexist and interact seamlessly with one another. This allowed for a greater degree of code sharing while reducing overhead amongst the teams and allowing for faster development times.\n" +
      "Contributed to architecting the monorepo system for the company's PWA. The company operated in multiple countries, and the monorepo allowed us to develop and maintain individual applications for each country while sharing common styling and utility components. This allowed for faster development times.\n" +
      "Successfully refactored legacy Angular codebases, reducing code complexity and improving maintainability while adhering to best practices and modern design patterns.\n" +
      "Developed reusable UI components using Angular libraries, standardizing UI elements across projects and significantly reducing development time.\n" +
      "Proactively stayed updated with industry trends and emerging technologies in front-end development, integrating new strategies to maintain a cutting-edge skillset and drive innovation",
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

