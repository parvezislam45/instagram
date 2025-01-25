'use client'

import { login } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
    const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      router.push('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="p-4 shadow-lg bg-black rounded-lg">
        <h2 className="mb-4 text-xl font-bold">Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="block w-full p-2 mb-2 border rounded placeholder:text-black"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="block w-full p-2 mb-2 border rounded placeholder:text-black"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
        </div>
    );
};

export default Login;