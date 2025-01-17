import careerList from "./career-list.json";
import matter from "gray-matter";

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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function getCareerList(): Promise<CareerPost[]> {
  return careerList;
}

export async function getCareerData(slug: string) {
  const post = careerList.find((post) => post.slug === slug);
  if (!post) {
    console.log("Post not found in careerList");
    return null;
  }

  try {
    const url = new URL(`/career/posts/${slug}.md`, baseUrl).toString();
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch markdown: ${response.statusText}`);
    }

    const markdown = await response.text();
    const { content } = matter(markdown);

    return {
      ...post,
      content,
    };
  } catch (e) {
    console.error("Error loading career post:", e);
    return null;
  }
}

export function getCareerPosts(): CareerPost[] {
  return careerList;
}
