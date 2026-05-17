import { useNavigate } from "react-router-dom";

export default function EditorPage() {
  const navigate = useNavigate();

  const handleBack = (): void => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">
        Welcome back, Tesla Enthusiast!
      </h1>

      <p
        onClick={handleBack}
        className="cursor-pointer underline"
      >
        back button
      </p>
    </div>
  );
}