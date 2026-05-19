import { fakeProjects } from "../data/fakeProjects";
import { Header } from "../components/HomePage/Header";
import { QuickActions } from "../components/HomePage/QuickActions";
import { RecentProjects } from "../components/HomePage/RecentProjects";
import { useHomeActions } from "../hooks/useHomeActions";

export default function HomePage() {
  const {
    openDocs,
    newProject,
    openProjectFile,
    goToProject,
  } = useHomeActions();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Header
        onOpenDocs={openDocs}
        onNewProject={newProject}
      />

      <main className="flex-1 p-10">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            Welcome back
          </h2>
          <p className="text-gray-500 mt-1">
            Open a recent project or create a new one.
          </p>
        </div>

        <QuickActions
          onNewProject={newProject}
          onOpenProject={() => void openProjectFile()}
        />

        <RecentProjects
          projects={fakeProjects}
          onSelect={goToProject}
        />
      </main>
    </div>
  );
}