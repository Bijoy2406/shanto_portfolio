const fs = require('fs');
const path = require('path');

const routes = [
  { dir: 'app', names: ['home-hero-section', 'home-projects-section'] },
  { dir: 'app/about', names: ['about-hero-section', 'about-details-section'] },
  { dir: 'app/research', names: ['research-content'] },
  { dir: 'app/publications', names: ['publications-content'] },
  { dir: 'app/achievements', names: ['achievements-content'] },
  { dir: 'app/writings', names: ['writings-content'] },
  { dir: 'app/courses', names: ['courses-content'] },
  { dir: 'app/workshops', names: ['workshops-content'] },
  { dir: 'app/projects', names: ['projects-content'] },
  { dir: 'app/affiliations', names: ['affiliations-content'] },
  { dir: 'app/volunteering', names: ['volunteering-content'] },
  { dir: 'app/more/invited-talks', names: ['invited-talks-content'] }
];

for (const route of routes) {
  const fileContent = `import BonesSkeleton from '@/components/BonesSkeleton';

export default function Loading() {
  return (
    <main className="flex-grow bg-surface min-h-screen flex flex-col pt-24">
      ${route.names.map(name => `<BonesSkeleton name="${name}" loading={true}>{null}</BonesSkeleton>`).join('\n      ')}
    </main>
  );
}
`;
  const dirPath = path.join(__dirname, route.dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'loading.tsx'), fileContent);
}

console.log('loading.tsx files generated.');
