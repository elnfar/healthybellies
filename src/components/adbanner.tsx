import Image from "next/image";

export default function AdBanner() {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border-2 border-black overflow-hidden shadow-lg">
          {/* Main Content - Two Column Layout */}
          <div className="flex flex-col  text-center  md:flex-row items-center gap-6 p-6 md:p-8">
            {/* Left - Product Image */}
            <div className="w-full md:w-1/3 flex justify-center text-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image 
                  src="/ageslim.png" 
                  alt="AgeSlim GLP-1 Patches" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
              {/* Headline with light blue background */}
              <div className="px-4 py-3 rounded text-center">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                  EXCLUSIVE <span className="bg-blue-100 p-1">AGESLIM GLP-1 PATCHES</span>  DISCOUNT 70% OFF
                </h2>
              </div>

              {/* Subtext */}
              <p className="text-lg sm:text-lg text-gray-900 font-medium text-center">
                Take advantage of the discount while supplies last.
              </p>

              {/* CTA Button */}
              <div className="pt-2 text-center w-fit mx-auto">
                <a 
                  href="https://ageslim.com/pages/glp-1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-4 py-4 bg-red-600 text-white font-black text-sm sm:text-lg rounded-lg hover:bg-red-700 transition-colors shadow-lg"
                >
                  Apply Discounts And Check Availability
                </a>
              </div>

              {/* Bottom Info - SELL OUT & SAVE UP */}
              <div className="flex flex-row items-start justify-center gap-8 pt-2 text-center text-gray-700 font-extrabold">
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-900">SELL-OUT</div>
                  <div className="text-sm font-bold">
                    RISK: <span className="text-red-600">HIGH</span>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-900">SAVE UP</div>
                  <div className="text-sm font-bold text-gray-900">TO 70%</div>
                </div>
              </div>

              {/* Expiry Date */}
              <div className="text-center  pt-2">
                <p className="text-sm text-gray-700 font-medium">
                  -This special offer is valid until-
                </p>
                <p className="text-base font-bold text-red-600">
                  Sunday 19 November 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
