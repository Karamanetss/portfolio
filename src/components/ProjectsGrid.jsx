function ProjectCard({ project, heightClass = '' }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl group ${heightClass}`}
      style={{ animationDelay: `${project.id * 80}ms` }}
      data-aos="fade-up"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
      {/* Tags in top-right */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full bg-black/70 text-white text-xs font-semibold uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Title bottom-left, slides up and fades in on hover */}
      <div className="absolute left-7 bottom-7 z-10 pointer-events-none">
        <h3
          className={`font-bold font-montserrat text-white drop-shadow-lg mb-0 transform transition-all duration-500 ease-in-out opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 ${
            heightClass.includes('h-[')
              ? 'text-3xl md:text-4xl'
              : 'text-2xl md:text-3xl'
          }`}
        >
          {project.title}
        </h3>
      </div>
    </div>
  );
}

export default function ProjectsGrid({ projects }) {
  const firstRow = projects.slice(0, 2);
  const secondRow = projects.slice(2, 5);

  return (
    <div className="flex flex-col gap-4">
      {/* First row: 2 cards, 50% width each on lg, 1 per row on md and below */}
      <div className="flex flex-col md:flex-row gap-4 px-3">
        {firstRow.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            heightClass="h-[320px] sm:h-[400px] md:h-[520px] lg:h-[720px]"
          />
        ))}
      </div>
      {/* Second row: 2 cards per row on md, 1 per row on sm, 3 per row on lg+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
        {secondRow.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            heightClass="h-[320px] sm:h-[400px] md:h-[520px] lg:h-[550px]"
          />
        ))}
      </div>
    </div>
  );
}
