"use client";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const gotToProductPage = () => {
    router.push('/product');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-6">
    <h1 className="text-4xl text-black font-bold mb-4">Welcome to the Home Page</h1>
    <p className="text-lg text-black mb-4">
    Discover the Product Page for deifferent varient
    </p>
    <div className="mt-6">
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg"
        onClick={gotToProductPage}
      >
        Go to Product Page
      </button>
    </div>
  </div>
  );
}