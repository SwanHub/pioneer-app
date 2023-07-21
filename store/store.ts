import { create } from 'zustand';
import { faker} from '@faker-js/faker';

export type Founder = {
    id: string;
    name: string;
    city: string;
    country: string;
    industryTags: string[];
    companyName: string;
    companyDescription: string;
    companyWebsiteUrl: string;
    linkedinUrl: string;
    githubUrl: string;
    imageUrl: string;
    coFounderUserId?: string;
  }
  
  const generateFounder = (): Founder => {
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      city: faker.location.city(),
      country: faker.location.country(),
      industryTags: [faker.commerce.department(), faker.commerce.department()],
      companyName: faker.company.name(),
      companyDescription: faker.lorem.sentence(280),
      companyWebsiteUrl: faker.internet.url(),
      linkedinUrl: `https://linkedin.com/in/${faker.internet.userName()}`,
      githubUrl: `https://github.com/${faker.internet.userName()}`,
      imageUrl: faker.image.avatar(),
      coFounderUserId: faker.number.int(10000).toString(), // Optional
    };
  };

// Function to generate an array of founder objects.
const generateFounders = (count: number): Founder[] =>
  Array.from({ length: count }, generateFounder);

// Define the store's state.
interface GeneralStore {
  founders: Founder[];
  setFounders: (founders: Founder[]) => void;
}

export const useStore = create<GeneralStore>((set) => ({
    founders: generateFounders(10),
    setFounders: (founders) => set({ founders }),
  }));

