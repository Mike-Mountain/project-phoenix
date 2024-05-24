import { GalleryImage } from '../models/gallery.model';

export const blenderGalleryData: GalleryImage[] = [
  {
    id: 1,
    isFeatured: false,
    name: 'Ancient Oasis',
    images: [
      {name: 'feature', path: 'beach_oasis.jpg'},
      {name: 'clay', path: 'beach_oasis_clay.jpg'},
      {name: 'wireframe', path: 'beach_oasis_wire.jpg'},
    ],
    description: 'Inspired by this amazing piece from u/Theoson on reddit -> https://www.reddit.com/r/assassinscreed/comments/hjseyz/my_recent_origins_inspired_painting_temple_arrival/',
    categories: ['Landscape', 'Nature'],
    tech: ['blender'],
    datePosted: new Date('2022')
  },
  {
    id: 2,
    isFeatured: true,
    name: 'Reclaimed',
    images: [
      {name: 'feature', path: 'reclaimed.jpg'},
      {name: 'clay', path: 'reclaimed_clay.jpg'},
    ],
    description: 'Heavily inspired by the work of James Tralie (www.jamestralie.com/)',
    categories: ['Landscape', 'Nature', 'Indoor'],
    tech: ['blender'],
    datePosted: new Date('2022')
  },
  {
    id: 3,
    isFeatured: true,
    name: 'Morning Coffee',
    images: [
      {name: 'feature', path: 'morning_coffee.jpg'},
    ],
    description: 'First Ever 3D project, obviously it was blenderGuru\'s Doughnuts.',
    categories: ['Hard Surface', 'Still Life'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 4,
    isFeatured: false,
    name: 'A sofa at sunrise',
    images: [
      {name: 'feature', path: 'sofa_sunrise.jpg'},
    ],
    description: 'My first render without a tutorial.',
    categories: ['Hard Surface', 'Still Life', 'Archviz'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 5,
    isFeatured: false,
    name: 'Just another bedroom',
    images: [
      {name: 'feature', path: 'another_bedroom.jpg'},
    ],
    description: 'Just another bedroom render',
    categories: ['Hard Surface', 'Still Life', 'Archviz'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 6,
    isFeatured: false,
    name: 'The magician\'s workshop',
    images: [
      {name: 'feature', path: 'magicians_workshop.jpg'},
    ],
    description: 'This was created mostly as practice, but also as a submission for the April contest on the blender Subreddit. The fire took some time to get right and I’m still not entirely happy with it. I tried to hide the emitter sphere from the camera in the final render but then the fire itself wouldn\'t render I\'m also not super happy with the light. I think it looks cool, but I really struggled to get it looking the same on a mobile phone vs my monitor. Overall, it was an awesome learning experience and I’m fairly pleased with what I’ve made.',
    categories: ['Hard Surface', 'Still Life', 'Fantasy'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 7,
    isFeatured: false,
    name: 'Arrival',
    images: [
      {name: 'feature1', path: 'arrival_2.jpg'},
      {name: 'feature2', path: 'arrival_1.jpg'},
    ],
    description: 'I made this after having a look at the Ducky 3D tutorial that’s been doing the rounds lately. Most of the inspiration comes from the Curtis Holt generative modeling tutorial. Rendered in Cycles with 400 samples and 150 frames.',
    categories: ['Hard Surface', 'Still Life', 'Landscape'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 8,
    isFeatured: true,
    name: 'Low Poly Home Screen',
    images: [
      {name: 'feature', path: 'start_screen.jpg'},
    ],
    description: 'Got bored one day. This was the result.',
    categories: ['Hard Surface', 'Still Life', 'Landscape'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 9,
    isFeatured: true,
    name: 'Long Live the Republic',
    images: [
      {name: 'feature1', path: 'the_republic_1.jpg'},
      {name: 'feature2', path: 'the_republic_2.jpg'},
      {name: 'feature3', path: 'the_republic_3.jpg'},
      {name: 'clay', path: 'the_republic_clay.jpg'},
    ],
    description: 'I made the lightsaber a good while ago, but I had a difficult time finding a way to present it. It took another month before I had this idea. The concept I\'m going for is something of a cross between modern life and the star wars universe. It\'s very abstract, and I spent more time on the actual models and placement than I did on conceptualization. The lightsaber itself I think needs to be re-done (it\'s just a random design that doesn\'t follow any of the in-universe rules), but overall I quite like the way it turned out.',
    categories: ['Hard Surface', 'Still Life', 'Fantasy'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 10,
    isFeatured: false,
    name: 'Wooden Donuts',
    images: [
      { name: 'feature', path: 'wooden_donuts.jpg' },
      { name: 'clay', path: 'wooden_donuts_clay.jpg' },
      { name: 'wireframe', path: 'wooden_donuts_wire.jpg' }
    ],
    description: 'I\'ve been seeing all the donuts coming out of blenderGuru\'s new course, and I just couldn\'t help but give them another go. No tutorials used, just went off what I remembered.',
    categories: ['Hard Surface', 'Still Life'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 11,
    isFeatured: true,
    name: 'Pokeballs',
    images: [
      {name: 'feature', path: 'pokeballs.jpg'},
      {name: 'clay', path: 'pokeballs_clay.jpg'},
      {name: 'wireframe', path: 'pokeballs_wire.jpg'},
    ],
    description: 'Pokeballs!',
    categories: ['Hard Surface', 'Still Life'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 12,
    isFeatured: false,
    name: 'Sword in the Light',
    images: [
      {name: 'feature', path: 'sword_shield.jpg'},
      {name: 'clay', path: 'sword_shield_clay.jpg'},
      {name: 'wireframe', path: 'sword_shield_wire.jpg'},
    ],
    description: 'A sword and shield in a grassy field.',
    categories: ['Hard Surface', 'Landscape', 'Fantasy'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 13,
    isFeatured: false,
    name: 'A simpler weapon for a more elegant time',
    images: [
      {name: 'feature1', path: 'saber_1.jpg'},
      {name: 'feature2', path: 'saber_2.jpg'},
      {name: 'feature3', path: 'saber_3.jpg'},
      {name: 'feature4', path: 'saber_4.jpg'},
      {name: 'feature5', path: 'saber_5.jpg'},
      {name: 'feature6', path: 'saber_6.jpg'},
      {name: 'feature7', path: 'saber_7.jpg'},
      {name: 'feature8', path: 'saber_8.jpg'},
      {name: 'clay1', path: 'saber_clay_1.jpg'},
      {name: 'clay2', path: 'saber_clay_2.jpg'},
      {name: 'wireframe1', path: 'saber_wire_1.jpg'},
      {name: 'wireframe', path: 'saber_wire_2.jpg'},
    ],
    description: 'I made the first version of the lightsaber a while ago, but ultimately I wasn\'t very happy with it. I decided to re-model it and render out a million different colors, angles, and filters.',
    categories: ['Hard Surface', 'Still Life', 'Fantasy'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 14,
    isFeatured: false,
    name: 'Low Poly Chill Room',
    images: [
      {name: 'feature', path: 'chill_room.jpg'},
      {name: 'clay', path: 'chill_room_clay.jpg'},
      {name: 'wireframe', path: 'chill_room_wire.jpg'},
    ],
    description: 'Can you tell I like Horizon? I went for something in between low-poly and high-poly. Just trying some new things.',
    categories: ['Hard Surface', 'Archviz', 'Low Poly'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 15,
    isFeatured: false,
    name: 'Magic Mountain',
    images: [
      {name: 'feature', path: 'magic_mountain.jpg'},
      {name: 'clay', path: 'magic_mountain_clay.jpg'},
      {name: 'wireframe', path: 'magic_mountain_wire.jpg'},
    ],
    description: 'I’m so damn excited about this thing! I’ve been following them online since the first announcement back in 2058, and today I have one of my own! The sounds and smells are incredible, and being able to adjust the volume high enough to block out the sounds of constant coughing outside really helps me sleep at night. Rendered in Cycles with 1500 samples with the denoiser (I know it’s a lot but I tried it at 1050 and it was still pretty noisy and the denoiser was distorting everything at that point',
    categories: ['Hard Surface', 'Archviz', 'Low Poly'],
    tech: ['blender'],
    datePosted: new Date('2020')
  },
  {
    id: 16,
    isFeatured: false,
    name: 'That Time of Year',
    images: [
      {name: 'feature1', path: 'low_poly_christmas_1.jpg'},
      {name: 'feature2', path: 'low_poly_christmas_2.jpg'},
      {name: 'feature3', path: 'low_poly_christmas_3.jpg'},
      {name: 'feature4', path: 'low_poly_christmas_4.jpg'},
      {name: 'feature5', path: 'low_poly_christmas_5.jpg'},
      {name: 'feature6', path: 'low_poly_christmas_6.jpg'},
      {name: 'feature7', path: 'low_poly_christmas_7.jpg'},
      {name: 'clay1', path: 'low_poly_christmas_clay_1.jpg'},
      {name: 'clay2', path: 'low_poly_christmas_clay_2.jpg'},
      {name: 'wireframe', path: 'low_poly_christmas_wire_1.jpg'},
    ],
    description: 'A cozy christmas',
    categories: ['Hard Surface', 'Archviz', 'Low Poly'],
    tech: ['blender'],
    datePosted: new Date('2019')
  },
  {
    id: 17,
    isFeatured: false,
    name: 'Just another Lightsaber render',
    images: [
      {name: 'feature1', path: 'lightsabers_1.jpg'},
      {name: 'feature2', path: 'lightsabers_2.jpg'},
      {name: 'feature3', path: 'lightsabers_3.jpg'},
      {name: 'feature4', path: 'lightsabers_4.jpg'},
      {name: 'feature5', path: 'lightsabers_5.jpg'},
      {name: 'feature6', path: 'lightsabers_6.jpg'},
      {name: 'clay1', path: 'lightsabers_clay.jpg'},
      {name: 'wireframe', path: 'lightsabers_wire.jpg'},
    ],
    description: 'Some more lightsabers, because I just can\'t seem to get enough',
    categories: ['Hard Surface', 'Still Life', 'Fantasy'],
    tech: ['blender'],
    datePosted: new Date('2020')
  },
  {
    id: 18,
    isFeatured: false,
    name: 'Elusive Nature Spirit',
    images: [
      {name: 'feature1', path: 'nature_spirit_1.jpg'},
      {name: 'feature2', path: 'nature_spirit_2.jpg'},
      {name: 'feature3', path: 'nature_spirit_3.jpg'},
      {name: 'feature4', path: 'nature_spirit_4.jpg'},
      {name: 'clay1', path: 'nature_spirit_clay_1.jpg'},
      {name: 'clay2', path: 'nature_spirit_clay_2.jpg'},
      {name: 'clay3', path: 'nature_spirit_clay_3.jpg'},
    ],
    description: 'The rare and elusive nature spirit, pictured here in it\'s natural environment. Not many believe in the shy creature, though that is thought to be as much a fault of their dwindling number as it is embarrassment on their part for the strangely collapsed backside. It has been postulated that the Nature Spirit is a guardian and healer of the wild and natural places on the planet. Explosions of natural growth mark the passing of this exceptional creature, along with the otherworldly cubes they leave behind that crumble into dust at the slightest touch. Most do not even believe the creature exists. For those of us who know better, the signs of their passing are obvious to see. Ancient writings indicate that the Nature Spirits wear a cloak of grass as a display of age and experience. The cloak is also said to be used to cover their odd backsides after the first humans to encounter them were so horrified they barricaded themselves in a cave for 5 years and created Capitalism. Created with assets from Quixel Megascans and MakeHuman, and of course the lovely Suzanne allowed me to use her likeness. The crystal shader that I absolutely mangled comes from reddit user `u/markMiso` and can be found here -> https://www.blendswap.com/blend/24810. This is my first real foray into rigging and posing a character on my own (I\'ve been using mixamo until now). As you can see, I tried valiantly to hide the mess I made of the poor creature\'s backside, but I wasn\'t entirely successful. Next step is to actually model a character myself I guess, an absolutely terrifying prospect.',
    categories: ['Hard Surface', 'Landscape', 'Fantasy'],
    tech: ['blender'],
    datePosted: new Date('2020')
  },
  {
    id: 19,
    isFeatured: false,
    name: 'Fantasy Canyon',
    images: [
      {name: 'feature', path: 'fantasy_canyon_1.jpg'},
    ],
    description: 'A fantastic canyon',
    categories: ['Landscape', 'Fantasy'],
    tech: ['blender'],
    datePosted: new Date('2021')
  },
  {
    id: 20,
    isFeatured: false,
    name: 'Abandoned Office',
    images: [
      {name: 'feature', path: 'abandoned_office_1.jpg'},
      {name: 'feature', path: 'abandoned_office_2.jpg'},
    ],
    description: 'Spent too long working from home after covid. Nature reclaimed the office ¯\\_(ツ)_/¯',
    categories: ['Archviz', 'Fantasy'],
    tech: ['blender'],
    datePosted: new Date('2022')
  },
  {
    id: 21,
    isFeatured: false,
    name: 'The One Who Defies Dragons',
    images: [
      {name: 'feature1', path: 'defies_dragons_1.jpg'},
      {name: 'feature2', path: 'defies_dragons_2.jpg'},
      {name: 'feature3', path: 'defies_dragons_3.jpg'},
    ],
    description: 'The recent Hogwarts Legacy announcement got me feeling a little bit inspired. Cloak was made with Marvelous Designer. Most of the editing was done with Pixelmator Pro. The dragon model comes from clara.io (https://clara.io/view/85618036-bb44-4eb5-9c5d-393cb3faef3a) The human model comes from free3d.com (https://free3d.com/3d-model/human-base-riged-85678) The landscape was inspired by CG_Geek\'s mountain landscape tutorial (https://www.youtube.com/watch?v=72LPW4S8bns)!',
    categories: ['Landscape', 'Still Life', 'Fantasy'],
    tech: ['blender'],
    datePosted: new Date('2021')
  },
];
