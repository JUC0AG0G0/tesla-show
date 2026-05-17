import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EditorPage from "../pages/EditorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/new" element={<EditorPage />} />
        <Route path="/projects/:projectId" element={<EditorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;