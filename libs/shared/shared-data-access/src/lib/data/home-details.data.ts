import { PersonalDetails } from '../models/personal-details.model';

export const homeDetails: PersonalDetails = {
  name: 'Michael Mountain',
  title: ['Front End Developer', 'Knitter', 'Terrible Guitarist'],
  about: {
    description: 'Hey there! I\'m a laid-back software developer who finds joy in coding, knitting, diving into a good book, and getting lost in movie marathons. you\'ll often catch me gaming, tinkering with code, or vibing to some tunes.',
    list: [
      'I have more yarn than I will probably ever be able to use',
      'I fantasize about being the kind of person that fantasizes about going skydiving',
      'I once sliced open my finger with a hand-held blender because I wanted to see if I could chop the tip off of a toothpick.'
    ],
    location: 'Johannesburg, South Africa',
    experience: '14 years experience pretending to be an adult',
    links: [
      { name: 'email', value: 'mikemountain.dev@gmail.com', link: '' },
      { name: 'phone', value: '084 972 5103', link: '' },
      { name: 'email', value: '@mikethemountaingoat', link: 'https://instagram.com/mikethemountaingoat' },
      { name: 'email', value: 'Artstation', link: 'https://artstation.com/sipredion' },
      { name: 'email', value: 'Spotify', link: 'https://spotify.com/mike' },
    ]
  }
}
