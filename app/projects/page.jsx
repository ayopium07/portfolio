import PageHero from '@/components/PageHero';
import ProjectsGrid from '@/components/ProjectsGrid';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Projects',
  description: 'Selected web platforms and mobile apps built and shipped by Joshua Ayotope Adeyefa.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        badge="Selected work"
        title={<>Projects I&apos;ve <span className="serif">built &amp; shipped</span></>}
        lead="A curated look at what I've delivered — web platforms, mobile apps, and tools that solve real problems for real users."
      />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <ProjectsGrid />
        </div>
      </section>
      <CTA />
    </>
  );
}
