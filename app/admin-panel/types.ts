// Comprehensive data model for the entire portfolio CMS.
// Rich text fields store HTML strings produced by TipTap.

export type RichText = string;

export interface ImageItem {
  id: string;
  url: string;
  alt?: string;
  order: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  images: ImageItem[];
  order: number;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle?: string;
  description: RichText;
  imageUrl?: string;
  seeMoreUrl?: string;
  order: number;
}

export interface CardItem {
  id: string;
  title: string;
  description: RichText;
  imageUrl?: string;
  url?: string;
  order: number;
}

export interface SocialLinks {
  linkedin?: string;
  google?: string;
  github?: string;
  facebook?: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role?: string;
  pi?: string;
  bullets: RichText;
  order: number;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree?: string;
  department?: string;
  period?: string;
  details?: RichText;
  order: number;
}

export interface NewsItem {
  id: string;
  text: RichText;
  order: number;
}

export interface CertificationItem {
  id: string;
  text: string;
  order: number;
}

export interface FeaturedResearchItem {
  id: string;
  title: string;
  description: RichText;
  order: number;
}

export interface PublicationSection {
  id: string;
  title: string;
  content: RichText;
  order: number;
}

export interface ResearchStats {
  published?: number | string;
  underReview?: number | string;
  citations?: number | string;
  hIndex?: number | string;
  i10Index?: number | string;
}

export interface Research {
  interestsText: RichText;
  tagCloudImageUrl?: string;
  badges: { id: string; label: string; colorClass: string; order: number }[];
  statsHeading: string;
  publicationYears: string;
  stats: ResearchStats;
  researchResumeUrl?: string;
  featuredResearch: FeaturedResearchItem[];
}

export interface PortfolioData {
  home: {
    profileImageUrl?: string;
    hiText: string;
    bioParagraph1: RichText;
    bioParagraph2: RichText;
    interestsLabel: string;
    interests: RichText;
    expertiseLabel: string;
    expertise: RichText;
    badges: ImageItem[];
    socialLinks: SocialLinks;
    resumeUrl?: string;
    heroSideImages: ImageItem[];
    projectsOverview: RichText;
    projectsOverviewTagline: RichText;
    cadProjects: ProjectItem[];
    simulationProjects: ProjectItem[];
    productProjects: ProjectItem[];
    footerText: string;
  };
  about: {
    title: string;
    cvUrl?: string;
    researchResumeUrl?: string;
    profileImageUrl?: string;
    aboutText: RichText;
    certificateImageNote: RichText;
    experience: ExperienceItem[];
    education: EducationItem[];
    skillsSummary: RichText;
    certificationsList: CertificationItem[];
    news: NewsItem[];
  };
  research: {
    interestsText: RichText;
    tagCloudImageUrl?: string;
    badges: { id: string; label: string; colorClass: string; order: number }[];
    statsHeading: string;
    publicationYears: string;
    stats: ResearchStats;
    researchResumeUrl?: string;
    featuredResearch: FeaturedResearchItem[];
  };
  publications: {
    journalCoverImages: ImageItem[];
    sections: PublicationSection[];
  };
  achievements: AchievementItem[];
  writings: {
    content: RichText;
  };
  courses: CardItem[];
  workshops: CardItem[];
  projectsList: CardItem[];
  affiliations: CardItem[];
  volunteering: CardItem[];
  invitedTalks: CardItem[];
}

export type ActionResult =
  | { success: true }
  | { success: false; error: string };
