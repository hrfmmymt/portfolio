import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { getCareerList } from '../app/career/utils';

function generateHTML(title: string, description?: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 630px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: white;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      padding: 48px;
    }
    .container {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: ${description ? 'flex-start' : 'center'};
      justify-content: center;
    }
    h1 {
      font-size: 48px;
      font-weight: bold;
      letter-spacing: -0.025em;
      text-align: ${description ? 'left' : 'center'};
      margin-bottom: ${description ? '24px' : '0'};
    }
    p {
      font-size: 24px;
      color: #666;
      text-align: ${description ? 'left' : 'center'};
      margin-top: ${description ? '0' : '24px'};
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${title}</h1>
    ${description ? `<p>${description}</p>` : '<p>Portfolio</p>'}
  </div>
</body>
</html>
  `.trim();
}

async function generateOGImages() {
  const posts = await getCareerList();
  const outputDir = join(process.cwd(), 'public', 'og');

  // Create output directory if it doesn't exist
  mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Generate OG image for homepage
  const homeHTML = generateHTML('# hirofumi miyamoto');
  await page.setContent(homeHTML);
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.screenshot({ path: join(outputDir, 'home.png'), type: 'png' });
  console.log('✓ Generated home OG image');

  // Generate OG images for each career post
  for (const post of posts) {
    const { title, role, tagList } = post.metadata;
    const description = `${role} - ${tagList.join(', ')}`;

    const html = generateHTML(title, description);
    await page.setContent(html);
    await page.screenshot({ path: join(outputDir, `${post.slug}.png`), type: 'png' });
    console.log(`✓ Generated OG image for ${post.slug}`);
  }

  await browser.close();
  console.log(`\n✓ Generated ${posts.length + 1} OG images`);
}

generateOGImages().catch((error) => {
  console.error('Error generating OG images:', error);
  process.exit(1);
});
