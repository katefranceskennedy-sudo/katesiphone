export const metadata = { title: 'projects' };

import ProjectsTitle from "../components/ProjectsTitle";

export default function FeaturesPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 36 }}>
      <ProjectsTitle />
    </main>
  );
}
