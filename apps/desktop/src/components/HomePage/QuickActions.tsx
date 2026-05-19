interface Props {
  onNewProject: () => void;
  onOpenProject: () => void;
}

export function QuickActions({ onNewProject, onOpenProject }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-10">
      <div
        onClick={onNewProject}
        className="p-5 bg-white border border-gray-200 rounded-lg hover:shadow-sm cursor-pointer transition"
      >
        <h3 className="font-medium">New Project</h3>
        <p className="text-sm text-gray-500 mt-1">
          Start a fresh lightshow sequence
        </p>
      </div>

      <div
        onClick={onOpenProject}
        className="p-5 bg-white border border-gray-200 rounded-lg hover:shadow-sm cursor-pointer transition"
      >
        <h3 className="font-medium">Open Project</h3>
        <p className="text-sm text-gray-500 mt-1">
          Load an existing project file
        </p>
      </div>
    </div>
  );
}