import { PersonalDetails } from '@project-mike/shared/shared-data-access';

export const resumePersonalDetails: PersonalDetails = {
  name: 'Michael Mountain',
  title: ['Front End Developer'],
  about: {
    description: 'Angular Developer experienced in all stages of advanced frontend web development. Able to effectively self-manage during independent projects, as well as collaborate in a team setting. Passionately curious about all things code related.',
    list: [
      'Five years experience working with Angular, JavaScript, HTML/CSS to deliver exceptional user experiences.',
      'Adept at contributing to a highly collaborative environment, finding solutions, and delivering customer satisfaction',
      'Enjoys challenges, thrives in teams, hard worker, excellent communicator, and strong writing skills.'
    ],
    location: 'Johannesburg, South Africa',
    experience: '6 years of professional experience',
    links: [
      { name: 'email', value: 'mikemountain.dev@gmail.com', link: '' },
      { name: 'phone', value: '084 972 5103', link: '' },
      { name: 'github', value: 'Github', link: 'https://github.com/Mike-Mountain' },
      { name: 'linkedin', value: 'LinkedIn', link: 'https://linkedIn.com/Mike-Mountain' }
    ]
  }
};
