'use client';

import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'security', label: 'Security' },
];

export default function ProjectsGrid() {
  const [filter, setFilter] = useState('all');

  const counts = useMemo(
    () =>
      Object.fromEntries(
        FILTERS.map((f) => [f.id, f.id === 'all' ? projects.length : projects.filter((p) => p.tags.includes(f.id)).length])
      ),
    []
  );

  const shown = filter === 'all' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            id={`filter-${f.id}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label} <span className="n">{counts[f.id]}</span>
          </button>
        ))}
      </div>
      <p className="count" aria-live="polite">
        Showing <b>{shown.length}</b> projects
      </p>
      <div className="projects">
        {/* key on filter so cards re-mount and pick up the reveal styles */}
        {shown.map((p, i) => (
          <ProjectCard key={`${filter}-${p.title}`} p={p} delay={(i % 3) * 80} />
        ))}
      </div>
    </>
  );
}
