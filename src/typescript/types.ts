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
