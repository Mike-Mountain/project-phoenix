export interface PersonalDetails {
  name: string,
  title: string[],
  about: PersonalAbout
}

export interface PersonalAbout {
  description: string,
  list: string[],
  location: string,
  experience: string,
  links: PersonalLinks[]
}

export interface PersonalLinks {
  name: string;
  value: string;
  link?: string;
}
