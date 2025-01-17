import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

type CareerPost = {
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

// キャリアデータを読み込む関数
async function generateCareerList() {
  const postsDirectory = path.join(process.cwd(), 'app/career/posts');
  const fileNames = fs.readdirSync(postsDirectory);
  const mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

  const posts = mdFiles.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    const slug = fileName.replace(/\.md$/, '');

    return {
      slug,
      metadata: {
        title: data.title,
        startDate: data.startDate,
        endDate: data.endDate,
        role: data.role,
        device: data.device,
        id: data.id,
        tagList: data.tagList || [],
      },
    };
  });

  // 日付の降順でソート
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.metadata.startDate);
    const dateB = new Date(b.metadata.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  // 生成されたデータをファイルに書き出し
  const outputPath = path.join(process.cwd(), 'app/career/career-list.json');
  fs.writeFileSync(outputPath, JSON.stringify(sortedPosts, null, 2));
}

generateCareerList();
