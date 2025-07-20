import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function TestingProcess() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Rigorous Testing Process
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              How we independently test and review transdermal patches to separate real innovations from expensive marketing gimmicks
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-8 mb-12">
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <Image 
                src="/patch.png" 
                alt="Independent Patch Testing Process" 
                width={640} 
                height={320} 
                className="w-full h-full object-contain rounded-lg bg-white" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Our Independent Testing Standards Matter
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Look, we get it. The transdermal patch industry is flooded with bold claims, fancy marketing, and products that promise the world but deliver disappointment. That's exactly why we created the most comprehensive independent patch testing protocol in the industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-gray-900">We're not affiliated with any patch companies.</strong> We purchase every product at full retail price, put them through months of real-world testing with actual people dealing with real health concerns, and report our honest findings. Because you deserve unbiased information before you spend your hard-earned money.
              </p>
            </div>

            {/* Phase 1 */}
            <div className="bg-slate-50 rounded-xl p-8 mb-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="bg-slate-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-sm font-bold">1</span>
                Initial Screening & Laboratory Analysis
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We purchase patches from various companies and send them to independent third-party laboratories for testing. We verify:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Actual ingredient concentrations match what companies claim on labels</li>
                <li>Presence of any undisclosed substances or fillers</li>
                <li>Purity levels and contamination testing</li>
                <li>Transdermal delivery system effectiveness</li>
                <li>Adhesive quality and skin safety</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Shocking truth:</strong> Nearly 40% of patches we test fail this initial screening phase. They either contain significantly less active ingredients than the companies advertise, or worse—contain substances not listed on their labels.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <span className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-sm font-bold">2</span>
                Real User Testing Program
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                This is where the magic happens. We recruit real volunteers—not paid actors or cherry-picked testimonials from companies. Our independent testing panels include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Demographics</h4>
                  <ul className="list-disc pl-6 text-gray-700 text-base">
                    <li>Women aged 35-65</li>
                    <li>Various health backgrounds</li>
                    <li>Different skin types</li>
                    <li>Multiple lifestyle factors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Testing Duration</h4>
                  <ul className="list-disc pl-6 text-gray-700 text-base">
                    <li>Minimum 8-week testing period</li>
                    <li>Daily usage tracking</li>
                    <li>Weekly check-ins</li>
                    <li>Before/after assessments</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We gather feedback from an average of <strong className="text-gray-900">65 real patch users</strong> for every brand we review. These aren't quick weekend trials—we're talking about women who test these patches for 3+ months and share their honest experiences about effectiveness, side effects, and real-world results.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="bg-green-50 rounded-xl p-8 mb-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <span className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-sm font-bold">3</span>
                Durability & Real-World Performance
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Lab tests are one thing. Real life is another. We put patches from different companies through extreme conditions that mirror actual daily life:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Stress Tests</h4>
                  <ul className="list-disc pl-6 text-gray-700 text-base">
                    <li>Hot flash simulation</li>
                    <li>Exercise and sweating</li>
                    <li>Shower and water exposure</li>
                    <li>Sleep movement testing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Performance Metrics</h4>
                  <ul className="list-disc pl-6 text-gray-700 text-base">
                    <li>8-12 hour effectiveness</li>
                    <li>Consistent delivery rates</li>
                    <li>Adhesive durability</li>
                    <li>Skin irritation monitoring</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Reality check:</strong> We've tested $180+ patches that completely failed to stay on during a normal workday. If a patch can't survive real life, it doesn't matter how perfect the ingredients look on the company's marketing materials.
              </p>
            </div>

            {/* Phase 4 */}
            <div className="bg-amber-50 rounded-xl p-8 mb-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
                <span className="bg-amber-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-sm font-bold">4</span>
                Clinical Research & Expert Review
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We don't just rely on user feedback. Our independent review team includes healthcare professionals who analyze:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Published clinical studies on active ingredients</li>
                <li>Proper dosage levels for transdermal delivery</li>
                <li>Potential interactions and contraindications</li>
                <li>Manufacturing standards and quality control claims</li>
                <li>Company transparency and scientific backing</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We've consulted with endocrinologists, dermatologists, and wellness experts to ensure our recommendations are not just based on effectiveness, but also safety for long-term use.
              </p>
            </div>

            {/* Scoring System */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Independent Scoring System
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                After all testing phases, we score each patch brand across five critical categories:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-bold text-gray-900">Effectiveness</span>
                    <p className="text-sm text-gray-600">Does it actually work as the company advertises?</p>
                  </div>
                  <span className="text-lg font-bold text-gray-700">30%</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-bold text-gray-900">Medical Quality</span>
                    <p className="text-sm text-gray-600">Ingredient purity and proper dosing</p>
                  </div>
                  <span className="text-lg font-bold text-gray-700">25%</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-bold text-gray-900">Value for Money</span>
                    <p className="text-sm text-gray-600">Results versus cost analysis</p>
                  </div>
                  <span className="text-lg font-bold text-gray-700">20%</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-bold text-gray-900">Company Policies</span>
                    <p className="text-sm text-gray-600">Return policies and customer support quality</p>
                  </div>
                  <span className="text-lg font-bold text-gray-700">15%</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-bold text-gray-900">Customer Satisfaction</span>
                    <p className="text-sm text-gray-600">Real user experiences and feedback</p>
                  </div>
                  <span className="text-lg font-bold text-gray-700">10%</span>
                </div>
              </div>
            </div>

            {/* Transparency */}
            <div className="bg-gray-900 text-white rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">
                Our Commitment to Independent Testing
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                We believe you have the right to know exactly how we conduct our independent reviews. Here's what sets us apart:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li><strong className="text-white">No company relationships:</strong> We purchase all products at full retail price with no special deals</li>
                <li><strong className="text-white">Independent testing:</strong> Third-party labs with no conflicts of interest</li>
                <li><strong className="text-white">Real user feedback:</strong> Verified volunteers, not company-provided testimonials</li>
                <li><strong className="text-white">Full disclosure:</strong> Any affiliate relationships are clearly marked</li>
                <li><strong className="text-white">Regular updates:</strong> We re-test products as companies change formulations</li>
              </ul>
              <p className="text-lg leading-relaxed">
                <strong>Bottom line:</strong> Our reputation depends on giving you honest, unbiased information about patch companies and their products. We'll never recommend a product we wouldn't use ourselves or suggest to our own family members.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to See Our Independent Results?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                After months of testing and thousands of hours of research, we've identified which patch companies actually deliver results. See which products passed our rigorous independent standards.
              </p>
              <a 
                href="/the-5-best-glp-1-patches-for-weight-management-craving-control"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold rounded-xl hover:from-slate-900 hover:to-gray-900 transition-all transform hover:scale-105 shadow-xl"
              >
                View Our Independent Patch Reviews →
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer id="contact" />
    </div>
  );
} 