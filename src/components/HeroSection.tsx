import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-4">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-3">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            I Spent 6 Months and $1,274 Testing 9 GLP-1 Patches — <span className="bg-blue-100">Here Are the Top 3 That Actually Work</span> 
          </h1>
          <p className="text-[18px] text-gray-700 mb-8 leading-tight">
          Can transdermal GLP-1 patches truly support weight management, curb appetite, and balance metabolism? Our editorial team tested leading brands to uncover which ones actually stand out and what to know before you buy.
          </p>
          
          {/* Author Info */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4 select-none">
                <Image src="/woman3.png" alt="Jennifer" width={48} height={48} className=" object-cover w-full h-full rounded-full pointer-events-none" />
              </div>
              <div>
                <p className="text-gray-900">Published by <span className="font-semibold">Kelsey Abraham</span> on September 12, 2025</p>
                <p className="text-gray-600 text-sm">Board-Certified Wellness Physician & Hormone Health Expert</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl mb-16">
          <div className=" rounded-lg overflow-hidden">
            <Image 
              src="/belly1.jpg" 
              alt="GLP-1 patches for weight management" 
              width={720} 
              height={320} 
              className=" h-full object-cover rounded-lg" 
            />
          </div>

          <div>
             <Image src="/featured.png" alt="featured" width={800} height={400} className="object-cover" />
          </div>
        </div>

      {/* Content Section */}
<div className="prose prose-lg max-w-none mb-16">
  <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
    <strong className="text-gray-900">Most women don’t realize it — but after 40, your body’s natural GLP-1 hormone levels start to drop.</strong>
  </p>

  <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
    That simple shift could be the real reason behind sudden, stubborn weight gain — even when you haven’t changed your diet or lifestyle.
  </p>

  <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
    I get it. You want to feel confident in your clothes again, manage cravings without fighting your willpower every day, and find something that actually works — safely and affordably.
  </p>

  <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
    I was in the same boat — skeptical and tired of false promises. So, I decided to test things myself.
  </p>

  <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
    <strong className="text-gray-900">For four months, I tried nearly every major GLP-1 patch brand on the market.</strong> What I found was eye-opening.
  </p>

  <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
    When GLP-1 levels drop — especially during perimenopause and beyond — it becomes harder to control hunger, burn fat, and avoid cravings. GLP-1 patches are designed to help by supporting your body’s natural hormone balance.
  </p>

  <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
    Studies show promising results: fewer cravings, more balanced energy, and healthy weight management — without crash diets or risky pills.
  </p>

  <p className="text-[20px] text-gray-700 leading-relaxed mb-6">
    But not all patches are created equal. Some truly deliver — others are just clever marketing. So we dug deep, reviewed the research, and tested 12 of the top-selling GLP-1 patches ourselves.
  </p>

  <p className="text-[20px] text-gray-700 leading-relaxed mb-8">
    <strong className="text-gray-900">The results were surprising — and if you’re thinking about trying a GLP-1 patch, what we found could save you time, money, and disappointment.</strong>
  </p>
</div>

      </div>
    </section>
  );
}
