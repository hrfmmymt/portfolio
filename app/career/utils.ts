import careerList from './career-list.json';

export type CareerPost = {
  slug: string;
  metadata: {
    title: string;
    startDate: string;
    endDate?: string;
    role: string;
    device: string | string[];
    id: string;
    tagList: string[];
  };
};

export async function getCareerList(): Promise<CareerPost[]> {
  return careerList;
}

export function getCareerPosts(): CareerPost[] {
  return careerList;
}
