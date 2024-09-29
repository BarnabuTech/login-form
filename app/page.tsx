'use client'
import { useRouter } from 'next/navigation';
import "./globals.css";

// import { ButtonHTMLAttributes } from 'react';

export default function Dashboard() {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="flex items-center justify-center min-h-screen">
      <main className="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
      </main>
      <button
        onClick={goToLogin}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Click to Login.
      </button>
    </div>
  );
}




