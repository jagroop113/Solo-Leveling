import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('googleUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      navigate('/profile');
    }
  }, []);

  return (
    <div id='login' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-950 px-4">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-sm shadow-glow text-white text-center">
        <h1 className="text-3xl font-solo text-purple-300 mb-6 tracking-widest drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">
          Shadow Login
        </h1>
        {user ? (
          <div>
            <p>Welcome, {user.name}</p>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              setUser(decoded);
              localStorage.setItem('googleUser', JSON.stringify(decoded));
              navigate('/profile');
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            theme="filled_black"
            shape="pill"
            width="250"
          />
        )}
      </div>
    </div>
  );
};

export default Login;
