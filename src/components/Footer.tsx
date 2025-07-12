export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              TopSkinPatches<span className="text-blue-400">.com</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted source for transdermal patch reviews and recommendations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="#methodology" className="text-gray-400 hover:text-white transition-colors">Methodology</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <div className="space-y-2">
              <a href="#nad" className="text-gray-400 hover:text-white transition-colors">NAD+ Patches</a>
              <a href="#weight" className="text-gray-400 hover:text-white transition-colors">Weight Loss</a>
              <a href="#energy" className="text-gray-400 hover:text-white transition-colors">Energy Patches</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 TopSkinPatches.com. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              📱
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              📘
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              📷
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 