import { getCareerPosts } from "app/career/utils";

export const baseUrl = "https://hrfmmymt.com";

export default async function sitemap() {
  const posts = getCareerPosts().map((post) => ({
    url: `${baseUrl}/career/${post.slug}`,
    lastModified: post.metadata.startDate,
  }));

  const routes = ["", "/career"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
