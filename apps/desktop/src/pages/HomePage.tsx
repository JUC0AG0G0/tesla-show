import { useNavigate } from "react-router-dom";
import { open } from "@tauri-apps/plugin-dialog";
import { openUrl } from "@tauri-apps/plugin-opener";

type Project = {
  id: string;
  name: string;
  path: string;
  updatedAt: string;
};

const DOC_URL = "https://github.com/JUC0AG0G0/tesla-show";

const fakeProjects: Project[] = [
  { id: "1", name: "Model S Lightshow", path: "/projects/model-s", updatedAt: "2 days ago" },
  { id: "2", name: "Cybertruck Intro Show", path: "/projects/cybertruck", updatedAt: "5 days ago" },
  { id: "3", name: "Neon Garage Sequence", path: "/projects/neon-garage", updatedAt: "1 week ago" },
  { id: "4", name: "Rain Mode Sync", path: "/projects/rain-mode", updatedAt: "2 weeks ago" },
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleOpenProject = async () => {
    const file = await open({
      multiple: false,
      filters: [
        {
          name: "Project",
          extensions: ["json", "ls", "tesla"]
        }
      ]
    });

    if (!file) return;

    console.log("Selected file:", file);

    navigate(`/open?file=${encodeURIComponent(file as string)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">

      {/* Top bar */}
      <div className="w-full flex items-center justify-between px-10 py-5 bg-white border-b border-gray-200">
        <div>
          <h1 className="text-lg font-semibold">
            Tesla Lightshow Studio
          </h1>
          <p className="text-sm text-gray-500">
            Create and manage your lightshows
          </p>
        </div>

        {/* Quick actions */}
        <div className="flex gap-3">
          <button
            onClick={() => openUrl(DOC_URL)}
            className="text-sm px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition"
          >
            Open Docs
          </button>

          <button
            onClick={() => navigate("/new")}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded-md transition"
          >
            + New project
          </button>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 p-10">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            Welcome back
          </h2>
          <p className="text-gray-500 mt-1">
            Open a recent project or create a new one.
          </p>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div
            onClick={() => navigate("/new")}
            className="p-5 bg-white border border-gray-200 rounded-lg hover:shadow-sm cursor-pointer transition"
          >
            <h3 className="font-medium">New Project</h3>
            <p className="text-sm text-gray-500 mt-1">
              Start a fresh lightshow sequence
            </p>
          </div>

          <div
            onClick={handleOpenProject}
            className="p-5 bg-white border border-gray-200 rounded-lg hover:shadow-sm cursor-pointer transition"
          >
            <h3 className="font-medium">Open Project</h3>
            <p className="text-sm text-gray-500 mt-1">
              Load an existing project file
            </p>
          </div>
        </div>

        {/* Recent projects */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Recent Projects
          </h3>

          <div className="space-y-3">
            {fakeProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(project.path)}
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
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}