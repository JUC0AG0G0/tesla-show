import { useNavigate } from "react-router-dom";
import { open } from "@tauri-apps/plugin-dialog";
import { openUrl } from "@tauri-apps/plugin-opener";

const DOC_URL = "https://juc0ag0g0.github.io/tesla-show/";

export function useHomeActions() {
  const navigate = useNavigate();

  const openDocs = (): void => {
    void openUrl(DOC_URL);
  };

  const newProject = (): void => {
    void navigate("/new");
  };

  const openProjectFile = async (): Promise<void> => {
    const file = await open({
      multiple: false,
      filters: [
        { name: "Project", extensions: ["json", "ls", "tesla"] },
      ],
    });

    if (!file) {
        return;
    }

    void navigate(`/open?file=${encodeURIComponent(file)}`);
  };

  const goToProject = (path: string): void => {
    void navigate(path);
  };

  return {
    openDocs,
    newProject,
    openProjectFile,
    goToProject,
  };
}