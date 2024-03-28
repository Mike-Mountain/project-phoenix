import {SideProject} from "../models/project.model";

export const sideProjects: SideProject[] = [
  {
    title: 'Code Master',
    description: 'A game based on the classic code master game',
    date: '2023',
    stack: [
      'Angular',
      'Angular Material',
      'NX',
      'Typescript'
    ],
    screenshots: ['codeMaster1.png', 'codeMaster2.png', "codeMaster3.png", 'codeMaster4.png'],
    link: 'https://mountain-games.firebaseapp.com/code-master'
  },
  {
    title: 'Ng Movie search',
    description: 'An app that was built as part of a technical test',
    date: '2021',
    stack: [
      'Angular',
      'Angular Material',
      'PWA',
      'Typescript'
    ],
    screenshots: ['movieSearch1.png', 'movieSearch2.png', "movieSearch3.png", 'movieSearch4.png'],
    link: 'https://ng-media-search.firebaseapp.com/'
  },
  {
    title: 'Mountain Budgets',
    description: 'An app to create budgets and track spending',
    date: '2020',
    stack: [
      'Angular',
      'Angular Material',
      'PWA',
      'Typescript'
    ],
    screenshots: ['budgets1.png', 'budgets2.png', "budgets3.png"],
    link: 'https://mountain-budgets.firebaseapp.com/'
  }
]
