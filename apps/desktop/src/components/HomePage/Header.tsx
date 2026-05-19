interface Props {
  onOpenDocs: () => void;
  onNewProject: () => void;
}

export function Header({ onOpenDocs, onNewProject }: Props) {
  return (
    <div className="w-full flex items-center justify-between px-10 py-5 bg-white border-b border-gray-200">
      <div>
        <h1 className="text-lg font-semibold">
          Tesla Lightshow Studio
        </h1>
        <p className="text-sm text-gray-500">
          Create and manage your lightshows
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onOpenDocs}
          className="text-sm px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition"
        >
          Open Docs
        </button>

        <button
          onClick={onNewProject}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded-md transition"
        >
          + New project
        </button>
      </div>
    </div>
  );
}