'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiHeart, FiHome, FiMessageSquare, FiSearch, FiUser } from "react-icons/fi";


const Nav = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsLoggedIn(false);
    router.push('/login');
  };
    return (
        <div>
           <div className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-black">Instagram</div>
        <div className="hidden sm:flex items-center bg-gray-100 p-2 rounded-lg">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none text-sm"
          />
        </div>
        <div className="flex items-center space-x-4">
          <FiHome className="text-xl text-black" />
          <FiMessageSquare className="text-xl text-black" />
          <FiHeart className="text-xl text-black" />
          <FiUser className="text-xl text-black" />
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-sm text-blue-500">Logout</button>
          ) : (
            <button onClick={() => router.push('/login')} className="text-sm text-blue-500">Login</button>
          )}
        </div>
      </div>
    </div>
        </div>
    );
};

export default Nav;