import type { PortfolioData } from './types';

// Seed defaults — used when KV is empty, and as fallback shape when keys are missing.
// Keep visual parity with the hardcoded UI the user originally built.

export const defaultData: PortfolioData = {
  home: {
    profileImageUrl: '/me.webp',
    hiText: 'Hi!',
    bioParagraph1:
      "<p>I'm Khondokar Shahriar Shanto, A Tech-Savvy CAD Expert and an Industrial and Production Engineer, currently working as an R&amp;D Engineer in a Tech Giant from Bangladesh.</p>",
    bioParagraph2:
      "<p>I specialize in designing products, simulation, reverse engineering parts, and creating ergonomic gadgets with a keen eye for detail. My expertise extends to rendering and simulating every aspect of the design process. What truly distinguishes me is my passion for ergonomic design, setting me apart in the industry. With a focus on excellence and user experience, I'm primed to make a significant impact in research and development.</p>",
    interestsLabel: 'My Interests:',
    interests:
      '<p>Simulation | CAD | Rendering | Ergonomics | Research | Additive Manufacturing | Biomedical Engineering | Data Analysis | Reverse Engineering | Robotics | Programming</p>',
    expertiseLabel: 'My Expertise:',
    expertise: '<p>ANSYS | SOLIDWORKS | KEYSHOT | MATLAB | PYTHON | C</p>',
    badges: [],
    socialLinks: {
      linkedin: '#',
      google: '#',
      github: '#',
      facebook: '#',
    },
    resumeUrl: '#',
    heroSideImages: [],
    projectsOverview:
      "<p>I've engaged in numerous projects, collaborating internationally, and extensively utilizing SolidWorks, KeyShot, and ANSYS. My portfolio encompasses a wide range, from designing flower vases and wine glasses to Engineering Motion Analysis for engines. Additionally, I've ventured into crafting complex structures for 3D printing and designing Automated Systems and Data Analysis. Each project served as a platform for learning, enabling me to refine my design skills, solve intricate problems, and consistently deliver outstanding results.</p>",
    projectsOverviewTagline:
      '<p>Few of my <strong>CAD</strong> and <strong>Simulation</strong> Projects are shown below.</p>',
    cadProjects: [],
    simulationProjects: [],
    productProjects: [],
    footerText: '© 2026 Khondokar Shahriar Shanto. All rights reserved.',
  },
  about: {
    title: 'PhD Student | Researcher | CSWE',
    cvUrl: '#',
    researchResumeUrl: '#',
    profileImageUrl: '/me.webp',
    aboutText:
      "<p><strong>Hey there! Welcome to my personal webpage.</strong></p><p>My name is Khondokar Shahriar Shanto. I am currently pursuing my Doctor of Philosophy in Biosystems Engineering at Auburn University, USA, and acting as a Graduate Research Assistant at the Center for Bioenergy and Bioproducts.</p>",
    certificateImageNote:
      '<p>Verified Certified SolidWorks Expert (CSWE) <a href="#">Click Here</a></p>',
    experience: [],
    education: [],
    skillsSummary:
      '<ul><li><strong>CAD Tools:</strong> SolidWorks, Autodesk Fusion 360, Autodesk Inventor, Solid Edge</li><li><strong>CAE Tools:</strong> Ansys Fluent, CFX, Comsol Multiphysics</li><li><strong>Documentation and Plotting:</strong> MS Office, Origin, Tecplot</li><li><strong>Programming:</strong> MATLAB, Python, R, Machine Learning</li><li><strong>Soft Skills:</strong> Leadership, Writing, Project Management, Time Management</li></ul>',
    certificationsList: [],
    news: [],
  },
  research: {
    interestsText:
      '<p>Computational Fluid Dynamics (CFD), Bio-Fluid Combustion, Swirling Flow, Large Eddy Simulation (LES), Convective Heat Transfer, Nanofluids, Phase Change Materials, Aerodynamics and Design, Machine Learning and data driven methods.</p>',
    tagCloudImageUrl: '',
    badges: [
      { id: 'b1', label: 'Scholar', colorClass: 'bg-blue-600', order: 0 },
      { id: 'b2', label: 'ResearchGate', colorClass: 'bg-green-600', order: 1 },
      { id: 'b3', label: 'Scopus', colorClass: 'bg-orange-600', order: 2 },
      { id: 'b4', label: 'ORCID', colorClass: 'bg-green-500', order: 3 },
      { id: 'b5', label: 'Clarivate', colorClass: 'bg-purple-600', order: 4 },
      { id: 'b6', label: 'Publons', colorClass: 'bg-blue-800', order: 5 },
      { id: 'b7', label: 'Academia.edu', colorClass: 'bg-black', order: 6 },
      { id: 'b8', label: 'ResearchID', colorClass: 'bg-blue-700', order: 7 },
      { id: 'b9', label: 'Loop', colorClass: 'bg-yellow-600', order: 8 },
    ],
    statsHeading: 'Research Profile Stats & Index',
    publicationYears: 'Publication Years: 2022 - Present',
    stats: {
      published: 42,
      underReview: 22,
      citations: '1,125',
      hIndex: 20,
      i10Index: 33,
    },
    researchResumeUrl: '#',
    featuredResearch: [],
  },
  publications: {
    journalCoverImages: [],
    sections: [],
  },
  achievements: [],
  writings: {
    content: '<p>Nothing to show.</p>',
  },
  courses: [],
  workshops: [],
  projectsList: [],
  affiliations: [],
  volunteering: [],
  invitedTalks: [],
};

export function mergeWithDefaults(stored: Partial<PortfolioData> | null): PortfolioData {
  if (!stored) return defaultData;
  return {
    home: { ...defaultData.home, ...(stored.home ?? {}) },
    about: { ...defaultData.about, ...(stored.about ?? {}) },
    research: { ...defaultData.research, ...(stored.research ?? {}) },
    publications: { ...defaultData.publications, ...(stored.publications ?? {}) },
    achievements: stored.achievements ?? defaultData.achievements,
    writings: { ...defaultData.writings, ...(stored.writings ?? {}) },
    courses: stored.courses ?? defaultData.courses,
    workshops: stored.workshops ?? defaultData.workshops,
    projectsList: stored.projectsList ?? defaultData.projectsList,
    affiliations: stored.affiliations ?? defaultData.affiliations,
    volunteering: stored.volunteering ?? defaultData.volunteering,
    invitedTalks: stored.invitedTalks ?? defaultData.invitedTalks,
  };
}
