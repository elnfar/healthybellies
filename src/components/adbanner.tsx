import Image from "next/image";

export default function AdBanner() {
  return (
    <section className=" py-6">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-yellow-100 rounded-lg  border-2 border-gray-200 overflow-hidden">
        <div className="">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column - Image */}
              <Image src="/patch.png" alt="Gentle Patches GLP-1" width={500} height={500} className="w-64 md:w-80 md:h-auto h-64 md:h-full mb-4 md:mb-0 md:mr-4" />
            
            {/* Right Column - Content */}
            <div className="space-y-2 md:space-y-4  md:text-left px-6 py-4 md:py-12">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 underline">
                Our Top Pick – Gentle Patches GLP-1
              </h3>
              
              <div className="space-y-1 text-xs md:text-sm">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2 md:mr-3 mt-1 text-sm md:text-lg font-bold bg-green-500 rounded-full p-1 md:p-2 h-5 w-5 md:h-6 md:w-6 flex items-center justify-center text-white">✓</span>
                  <span className="text-gray-700">Clinically proven ingredients including Berberine and Green Tea Extract</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                <span className="text-green-500 mr-2 md:mr-3 mt-1 text-sm md:text-lg font-bold bg-green-500 rounded-full p-1 md:p-2 h-5 w-5 md:h-6 md:w-6 flex items-center justify-center text-white">✓</span>
                  <span className="text-gray-700">Revolutionary "Steady-Release Technology" for 8-12 hour support</span>
                </div>
                <div className="flex items-center  md:justify-start">
                <span className="text-green-500 mr-2 md:mr-3 mt-1 text-sm md:text-lg font-bold bg-green-500 rounded-full p-1 md:p-2 h-5 w-5 md:h-6 md:w-6 flex items-center justify-center text-white">✓</span>

                  <span className="text-gray-700">No pills, no injections, just one easy patch daily</span>
                </div>
              </div>
              
              <button className="pt-2 md:pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-black text-white font-bold transition-colors text-base md:text-lg hover:bg-gray-400"
                >
                  CHECK AVAILABILITY
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}