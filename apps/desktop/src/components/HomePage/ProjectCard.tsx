import { Project } from "../../types/project";

interface Props {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm cursor-pointer transition"
    >
      <div>
        <p className="font-medium">{project.name}</p>
        <p className="text-sm text-gray-500">{project.path}</p>
      </div>

      <span className="text-xs text-gray-400">
        {project.updatedAt}
      </span>
    </div>
  );
}