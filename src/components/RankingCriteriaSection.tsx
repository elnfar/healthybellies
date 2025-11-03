export default function RankingCriteriaSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Our Ranking Criteria
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed">
          To uncover which GLP-1 patches truly stand out from marketing noise, our independent 
          research panel examined each brand through four essential lenses — focusing on science, 
          technology, safety, and user experience.
        </p>

        <div className="space-y-8">
          {/* Criterion 1 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              1. Scientific Integrity
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We prioritized patches developed with real clinical insight — formulations designed 
              around proven GLP-1 mechanisms that help regulate appetite and metabolism. 
              Marketing buzzwords didn’t matter; credible formulation science did.
            </p>
          </div>

          {/* Criterion 2 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              2. Transdermal Innovation
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Effective patches rely on advanced skin-delivery systems — not just adhesive layers. 
              We scored products higher for using next-generation absorption technology that allows 
              steady, bioavailable nutrient delivery throughout the day.
            </p>
          </div>

          {/* Criterion 3 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              3. Safety & Manufacturing Standards
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Every top-rated patch is produced in facilities following rigorous safety and 
              quality protocols. We verified whether brands disclose ingredient sourcing, 
              third-party testing, and GMP or ISO manufacturing compliance.
            </p>
          </div>

          {/* Criterion 4 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              4. User Experience & Consistency
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Finally, we analyzed real user feedback — comfort, skin sensitivity, ease of use, 
              and overall satisfaction over time. Patches that delivered reliable daily results 
              and strong repeat-purchase behavior earned the highest marks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
