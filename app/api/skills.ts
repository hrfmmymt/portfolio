import type { NextApiRequest, NextApiResponse } from "next";

export type SkillsList = {
  label: string;
  value: number;
};

export const skillsList: SkillsList[] = [
  { label: "React", value: 2 },
  { label: "Preact", value: 2 },
  { label: "React - Redux", value: 2 },
  { label: "Angular", value: 2 },
  { label: "Vue.js", value: 2 },
  { label: "PWA", value: 3 },
  { label: "AMP", value: 2 },
  { label: "A11y", value: 3 },
  { label: "Photoshop", value: 2 },
  { label: "Illustrator", value: 2 },
  { label: "Git", value: 3 },
  { label: "Gulp", value: 2 },
  { label: "webpack", value: 2 },
  { label: "Sketch App", value: 2 },
  { label: "JavaScript", value: 3 },
  { label: "CSS", value: 3 },
  { label: "HTML", value: 3 },
  { label: "PHP", value: 1 },
  { label: "Ruby", value: 1 },
  { label: "Node.js", value: 2 },
  { label: "WordPress", value: 1 },
  { label: "MySQL", value: 2 },
  { label: "CircleCI", value: 2 },
  { label: "Travis CI", value: 2 },
  { label: "VS Code", value: 3 },
  { label: "Web Performance", value: 3 },
  { label: "GraphQL", value: 2 },
  { label: "Serverless Architectures", value: 2 },
  { label: "SPA", value: 2 },
  { label: "fish shell", value: 2 },
  { label: "Firebase", value: 2 },
  { label: "Web Components", value: 2 },
  { label: "Prettier", value: 2 },
];

export const runtime = "edge";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SkillsList[]>,
) {
  res.status(200).json(skillsList);
}
