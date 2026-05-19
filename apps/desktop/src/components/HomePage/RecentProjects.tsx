import { ProjectCard } from "./ProjectCard";
import { Project } from "../../types/project";

interface Props {
  projects: Project[];
  onSelect: (path: string) => void;
}
export function RecentProjects({ projects, onSelect }: Props) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Recent Projects
      </h3>

      <div className="space-y-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onSelect(project.path)}
          />
        ))}
      </div>
    </div>
  );
}