import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HunterProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("googleUser");
    if (!storedUser) {
      navigate("/"); 
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 flex items-center justify-center px-4">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl text-white p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src={user.picture}
            alt="Hunter Avatar"
            className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-md"
          />
          <h2 className="mt-4 text-2xl font-solo tracking-widest text-purple-300 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]">
            {user.name}
          </h2>
          <p className="text-sm mt-1 text-gray-400">"Shadow Monarch"</p>

          <div className="mt-6 w-full text-left space-y-3 text-sm font-medium">
            <div className="flex justify-between">
              <span className="text-gray-400">Rank</span>
              <span className="text-yellow-400">S</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Level</span>
              <span className="text-green-400">1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Class</span>
              <span className="text-blue-400">Shadow Assassin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HunterProfile;
