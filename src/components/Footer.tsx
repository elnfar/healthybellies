export default function Footer({ id }: { id: string }) {
  return (
    <footer className="bg-gray-900 text-white py-8" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left - Brand Logo */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              HealthyBellies
            </h3>
          </div>
          
          {/* Right - Copyright */}
          <div>
            <p className="text-gray-400 text-sm">
              &copy; 2025 HealthyBellies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 