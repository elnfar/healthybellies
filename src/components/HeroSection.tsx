import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-[36px] font-bold text-gray-900 mb-6 leading-tight">
            The 5 Best GLP-1 Patches for Weight Management & Craving Control
          </h1>
          <p className="text-[20px] text-gray-600 mb-8 leading-relaxed">
            Can GLP-1 patches really help with stubborn weight, uncontrollable cravings, and hormonal changes? 
            And which brands actually deliver results? Our editorial team investigated and reveals the most important findings.
          </p>
          
          {/* Author Info */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Written by Jennifer on May 5, 2025</p>
                <p className="text-gray-600 text-sm">Senior Health Editor & Women's Wellness Expert</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl p-8 mb-12">
          <div className="w-full h-80 rounded-lg overflow-hidden">
            <Image 
              src="/belly.jpeg" 
              alt="GLP-1 patches for weight management" 
              width={640} 
              height={320} 
              className="w-full h-full object-cover rounded-lg" 
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
            Your body's natural GLP-1 hormone levels begin to decline after 40.
          </p>
          
          <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
            Yet many women don't realize this could be the real reason behind unexpected weight gain.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            (Yes, that's why those extra pounds seem to show up overnight… harsh, but true.)
          </p>
          
          <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
            Trust me, I get it. You want to feel confident in your clothes again without resorting to extreme diets, manage those frustrating cravings without relying solely on willpower, and finally find a solution that truly works—without dangerous side effects or a massive financial burden.
          </p>
          
          <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
            I was skeptical myself. That's why I spent 4 months thoroughly testing every major GLP-1 patch brand on the market.
          </p>
          
          <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
            <strong className="text-gray-900">Persistent hunger, stubborn belly fat, uncontrollable cravings, and weight that just won't shift—these are all common symptoms of dropping GLP-1 hormone levels, especially during perimenopause and beyond.</strong>
          </p>
          
          <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
            GLP-1 patches claim to target these issues at the root by supporting your body's natural hormonal function. Recent clinical research shows encouraging results: from reduced cravings to more stable blood sugar levels and real weight control without drastic measures.
          </p>
          
          <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
            But is this really accurate? And if so, which patches truly work and which are just smart marketing? With so many options out there, it's become difficult to separate fact from fiction.
          </p>
          
          <p className="text-[20px] text-gray-700 leading-relaxed mb-8">
            This new wave of GLP-1 patches claims to naturally restore hormonal balance. But which ones actually deliver? We conducted extensive research, reviewed clinical data, and put 12 of the top-selling GLP-1 patches to the test. The results were eye-opening.
          </p>
        </div>
      </div>
    </section>
  );
}
