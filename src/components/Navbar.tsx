import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            TopSkinPatches
          </div>
          
          {/* Get 70% Off Button */}
          <div>
            <a 
              href="#1" 
              className="inline-flex items-center px-6 py-2 text-red-500 font-semibold transition-colors"
            >
              Get 70% Off Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 