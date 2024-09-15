export interface IProjectItem {
  id: string;
  name: string;
  description: string;
  github: string;
  email: string;
  link: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
  stargazerCount: number;
  forkCount: number;
  homepageUrl?: string;
  url?: string;
}

export interface IProjectCardProps {
  item?: IProjectItem;
}
