import fs from "node:fs";
import path from "node:path";

function copyMarkdownFiles() {
  const sourceDir = path.join(process.cwd(), "app/career/posts");
  const targetDir = path.join(process.cwd(), "public/career/posts");

  // ターゲットディレクトリが存在しない場合は作成
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Markdownファイルをコピー
  const files = fs.readdirSync(sourceDir);
  for (const file of files) {
    if (file.endsWith(".md")) {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

copyMarkdownFiles();
