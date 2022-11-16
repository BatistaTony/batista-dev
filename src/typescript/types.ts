export interface ExperienceHistoryType {
  id: string;
  date: {
    from: string;
    to: string;
  };
  position: string;
  company: {
    name: string;
    website: string;
  };
  description: string[];
  isRemote: boolean;
  address: string;
  contractType: ContractType;
}

export enum ContractType {
  "Fulltime" = "Full time",
  "Parttime" = "Part time",
  "Freelancer" = "Freelancer",
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  github: string;
  liveUrl: string;
  owner?: string;
}

export interface Post {
  id: string;
  author: string;
  date: Date | string;
  title: string;
  topics: string[];
  content: unknown;
  url?: string;
  readingTime: string;
}

export interface NetworkType {
  icon: JSX.Element;
  url: string;
}
