import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  // Define categories of transdermal patches
  const patchCategories = [
    {
      title: "GLP-1 Weight Management Patches",
      displayText: "GLP-1",
      description: "Revolutionary patches for appetite control, weight management, and hormonal balance",
      image: "/patch.png",
      link: "/the-5-best-glp-1-patches-for-weight-management-craving-control",
      benefits: ["Appetite Control", "Weight Management", "Hormonal Balance"],
      isPopular: true
    },
    {
      title: "NAD+ Anti-Aging Patches", 
      displayText: "NAD+",
      description: "Boost cellular energy and support healthy aging with NAD+ supplementation",
      image: "/patch.png",
      link: "/nad-patches",
      benefits: ["Cellular Energy", "Anti-Aging", "Mental Clarity"],
      isPopular: false
    },
    {
      title: "Vitamin B12 Energy Patches",
      displayText: "B12",
      description: "Sustained energy release and enhanced metabolism support",
      image: "/patch.png", 
      link: "/b12-patches",
      benefits: ["Energy Boost", "Metabolism", "Mental Focus"],
      isPopular: false
    },
    {
      title: "Vitamin D3 Immunity Patches",
      displayText: "D3",
      description: "Support immune system and bone health with steady vitamin D absorption",
      image: "/patch.png",
      link: "/vitamin-d3-patches", 
      benefits: ["Immune Support", "Bone Health", "Mood Support"],
      isPopular: false
    },
    {
      title: "Collagen Beauty Patches",
      displayText: "Collagen",
      description: "Promote skin elasticity, hair strength, and nail health from within",
      image: "/patch.png",
      link: "/collagen-patches",
      benefits: ["Skin Health", "Hair Strength", "Anti-Aging"],
      isPopular: false
    },
    {
      title: "Iron Deficiency Support Patches",
      displayText: "Iron",
      description: "Gentle iron supplementation without digestive upset",
      image: "/patch.png",
      link: "/iron-patches",
      benefits: ["Energy Levels", "Blood Health", "No Stomach Upset"],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                TopSkin<span className="text-blue-500">Patches</span>
              </Link>
            </div>
            
            {/* Navigation Menu - Hidden on mobile, visible on desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Link href="#categories" className="text-gray-700 hover:text-slate-600 px-3 py-2 text-sm font-medium transition-colors">
                Categories
              </Link>
              
              <Link href="#contact" className="text-gray-700 hover:text-slate-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200">
               #1 Trusted Patch Review Authority
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
              Discover the Most 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-800 to-gray-900"> Effective</span>
              <br />Transdermal Patches
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              We rigorously test and review transdermal patches for health, beauty, and wellness. 
              Get expert insights, honest reviews, and find the perfect patches for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="#categories" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold rounded-xl hover:from-slate-900 hover:to-gray-900 transition-all transform hover:scale-105 shadow-xl"
              >
                Explore Patch Categories →
              </Link>
              <Link
                href="/testing-process" 
                className="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                Our Testing Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              6 Categories • 50+ Patches Tested
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Patch Categories We Review
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From weight management to anti-aging, we test and review the most effective 
              transdermal patches across all major health and wellness categories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patchCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group transform hover:-translate-y-2 border border-gray-200 flex flex-col h-full">
                {category.isPopular && (
                  <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-sm font-bold px-4 py-3 flex items-center">
                    <span className="mr-2">🔥</span>
                    Most Popular Choice
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="w-full h-48 mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-gray-200 flex items-center justify-center relative border border-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200/30 to-gray-300/30"></div>
                    <span className="text-5xl font-black text-slate-800 relative z-10 tracking-tight">
                      {category.displayText}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-slate-700 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg flex-grow">
                    {category.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <span 
                        key={benefitIndex}
                        className="inline-block bg-slate-50 text-slate-700 text-sm font-medium px-4 py-2 rounded-full border border-slate-200"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  
                  {/* Removed the Link button for "View Reviews & Rankings →" */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 w-20 h-1 mx-auto mb-8 rounded-full"></div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with Latest Reviews
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Get notified when we publish new patch reviews, testing results, and exclusive insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-amber-300 text-lg border border-gray-300"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all transform hover:scale-105 shadow-lg">
              Subscribe Now
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">Join 15,000+ health enthusiasts. No spam, unsubscribe anytime.</p>
        </div>
      </section>

      <Footer id="contact"/>
    </div>
  );
}