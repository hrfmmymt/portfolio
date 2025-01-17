import fs from "node:fs";
import path from "node:path";

type Metadata = {
  title: string;
  startDate: string;
  endDate: string;
  tagList: string[];
  role: string;
  device: string[];
  id: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error("Invalid frontmatter format");
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const metadata: Record<string, string | string[]> = {};

  // 複数行の配列データを一時的に保存する変数
  let currentKey: string | null = null;
  let arrayValues: string[] = [];

  const lines = frontMatterBlock.trim().split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.includes(":")) {
      // 新しいキーの開始
      if (currentKey && arrayValues.length > 0) {
        // 前の配列データを保存
        metadata[currentKey] = arrayValues;
        arrayValues = [];
      }

      const [key, value] = line.split(":", 2);
      currentKey = key.trim();

      if (value) {
        const trimmedValue = value.trim();
        if (trimmedValue.startsWith("[")) {
          // インライン配列の処理
          const arrayMatch = trimmedValue.match(/^\[(.*)\]$/);
          if (arrayMatch) {
            metadata[currentKey] = arrayMatch[1]
              .split(",")
              .map((item) => item.trim().replace(/^["'](.*)["']$/, "$1"));
            currentKey = null;
          }
        } else {
          // 通常の値
          metadata[currentKey] = trimmedValue.replace(/^["'](.*)["']$/, "$1");
          currentKey = null;
        }
      }
    } else if (line.trim().startsWith("-") && currentKey) {
      // 配列アイテムの処理
      const value = line.replace("-", "").trim();
      arrayValues.push(value.replace(/^["'](.*)["']$/, "$1"));
    }
  }

  // 最後の配列データを保存
  if (currentKey && arrayValues.length > 0) {
    metadata[currentKey] = arrayValues;
  }

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getCareerPosts() {
  return getMDXData(path.join(process.cwd(), "app", "career", "posts"));
}
