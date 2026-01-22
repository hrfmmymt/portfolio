import type { APIRoute } from 'astro';
import { getCareerPosts } from '../../app/career/utils';

const baseUrl = 'https://hrfmmymt.com';

export const GET: APIRoute = async () => {
  const allCareers = getCareerPosts();

  const itemsXml = allCareers
    .sort((a, b) => {
      if (new Date(a.metadata.startDate) > new Date(b.metadata.startDate)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/career/${post.slug}</link>
          <description>${post.metadata.role || ''}</description>
          <pubDate>${new Date(post.metadata.startDate).toUTCString()}</pubDate>
        </item>`,
    )
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
};
