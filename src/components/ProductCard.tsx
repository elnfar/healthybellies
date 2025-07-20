import Image from "next/image";
import { PatchData } from "@/types/patch";

interface ProductCardProps {
  patch: PatchData;
}

export default function ProductCard({ patch }: ProductCardProps) {
  return (
    <div id={`${patch.rank}`} className="bg-gray-50 rounded-2xl border-2 border-gray-200 shadow-lg p-8 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 underline">
            {patch.rank}. {patch.name}
          </h3>
          <p className="text-base text-gray-600">by {patch.company}</p>
        </div>
      </div>

      {/* 3 Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="w-full h-52 flex items-center justify-center overflow-hidden">
            <Image 
              src={patch.image} 
              alt={patch.name} 
              width={600} 
              height={400} 
              className="object-contain w-full h-full" 
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-base font-semibold mb-2">Overall Grade</div>
          <div className="text-5xl font-bold text-blue-600">{patch.grade}</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-base font-semibold mb-2">Rating</div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{patch.rating}/10</div>
          <div className="flex text-yellow-400 text-xl">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className={i < patch.stars ? 'text-yellow-400' : 'text-gray-300'}>{star}</span>
            ))}
          </div>
        </div>
      </div>

      {/* White Background Container */}
      <div className="bg-white rounded-lg p-8 border border-gray-200">
        {/* The Complete Breakdown */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-gray-900 mb-4">THE COMPLETE BREAKDOWN</h4>
          <div className="space-y-4 text-gray-700 leading-relaxed text-base">
            {patch.breakdown.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {patch.hasPromotion && (
        <div className="mb-6">
          <div className="border-2 border-dashed border-red-400 bg-red-50 p-4 rounded-lg text-center">
            <span className="text-red-700 font-semibold text-base uppercase">{patch.promotionText}</span>
          </div>
        </div>
        )}

        {/* Visit Site Button */}
        <div className="text-center mb-8">
          <a href="#" className="inline-block w-full px-16 py-4 bg-gradient-to-b from-yellow-200 to-amber-400 text-black font-bold text-lg rounded-lg hover:from-yellow-500 hover:to-amber-600 transition-all shadow-lg">
            VISIT SITE
          </a>
        </div>

        {/* Rating Bars */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium w-32 text-sm">Effectiveness</span>
            <div className="flex-1 mx-4 bg-gray-200 rounded-full h-6">
              <div className="bg-green-500 h-6 rounded-full" style={{width: `${patch.ratings.effectiveness}%`}}></div>
            </div>
            <span className="text-gray-700 font-bold w-16 text-sm">{(patch.ratings.effectiveness/10).toFixed(1)}/10</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium w-32 text-sm">Medical Quality</span>
            <div className="flex-1 mx-4 bg-gray-200 rounded-full h-6">
              <div className="bg-green-500 h-6 rounded-full" style={{width: `${patch.ratings.medicalQuality}%`}}></div>
            </div>
            <span className="text-gray-700 font-bold w-16 text-sm">{(patch.ratings.medicalQuality/10).toFixed(1)}/10</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium w-32 text-sm">Value for Money</span>
            <div className="flex-1 mx-4 bg-gray-200 rounded-full h-6">
              <div className="bg-green-500 h-6 rounded-full" style={{width: `${patch.ratings.valueForMoney}%`}}></div>
            </div>
            <span className="text-gray-700 font-bold w-16 text-sm">{(patch.ratings.valueForMoney/10).toFixed(1)}/10</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium w-32 text-sm">Return Policy</span>
            <div className="flex-1 mx-4 bg-gray-200 rounded-full h-6">
              <div className="bg-green-500 h-6 rounded-full" style={{width: `${patch.ratings.returnPolicy}%`}}></div>
            </div>
            <span className="text-gray-700 font-bold w-16 text-sm">{(patch.ratings.returnPolicy/10).toFixed(1)}/10</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium w-32 text-sm">Customer Satisfaction</span>
            <div className="flex-1 mx-4 bg-gray-200 rounded-full h-6">
              <div className="bg-green-500 h-6 rounded-full" style={{width: `${patch.ratings.customerSatisfaction}%`}}></div>
            </div>
            <span className="text-gray-700 font-bold w-16 text-sm">{(patch.ratings.customerSatisfaction/10).toFixed(1)}/10</span>
          </div>
        </div>

        {/* Pros and Cons */}
        <div>
          <h4 className="text-lg font-bold text-green-600 mb-4">PROS</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
            {patch.pros.map((pro, i) => (
              <div key={i} className="flex items-center">
                <span className="text-green-600 mr-3 text-base flex-shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{pro}</span>
              </div>
            ))}
          </div>
          
          <h4 className="text-lg font-bold text-red-600 mb-4">CONS</h4>
          <div className="mb-6">
            {patch.cons.map((con, i) => (
              <div key={i} className="flex items-center mb-2">
                <span className="text-red-600 mr-3 text-base flex-shrink-0">✗</span>
                <span className="text-gray-700 text-sm">{con}</span>
              </div>
            ))}
          </div>

          <h4 className="text-lg font-bold text-gray-700 mb-4">BOTTOM LINE</h4>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
            {patch.bottomLine.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Final Promotional Offer */}
      {patch.hasPromotion && (
        <div className="mt-6">
          <div className="border-2 border-dashed border-red-400 bg-red-50 p-4 rounded-lg text-center">
            <span className="text-red-700 font-semibold text-base">{patch.promotionText}</span>
          </div>
        </div>
      )}

      {/* Final Visit Site Button */}
      <div className="text-center mt-6">
        <a href="#" className="inline-block w-full px-16 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-lg rounded-lg hover:from-yellow-500 hover:to-amber-600 transition-all shadow-lg">
          VISIT SITE
        </a>
      </div>
    </div>
  );
} 