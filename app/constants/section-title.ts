export const SECTION_LIST = {
  PROFILE: "profile" as const,
  CAREER: "career" as const,
  SKILLS: "skills" as const,
  SKILLS_OR: "skills, or" as const,
  ETC: "etc" as const,
  ETC_PERIOD: "etc." as const,
};

export type SectionTitle =
  | typeof SECTION_LIST.PROFILE
  | typeof SECTION_LIST.CAREER
  | typeof SECTION_LIST.SKILLS
  | typeof SECTION_LIST.SKILLS_OR
  | typeof SECTION_LIST.ETC
  | typeof SECTION_LIST.ETC_PERIOD;

export type SectionId =
  | typeof SECTION_LIST.PROFILE
  | typeof SECTION_LIST.CAREER
  | typeof SECTION_LIST.SKILLS
  | typeof SECTION_LIST.ETC;
