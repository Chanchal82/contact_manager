import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 sm:p-20 pb-5 gap-5 ">
      <div className="text-center">
          <h1 className="font-bold text-4xl">Welcome to context manager</h1>
          <p className="text-sm mt-2 text-gray-500">Manage your contact efficiently and easily</p>
      </div>
    </div>
  );
}
