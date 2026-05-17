import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col"> 
      <h1 className="text-3xl font-bold mb-6">Welcome back, Tesla Enthusiast!</h1>
      <p 
        onClick={() => navigate("/")}
      >
        back button
      </p>
    </div>
  );
}