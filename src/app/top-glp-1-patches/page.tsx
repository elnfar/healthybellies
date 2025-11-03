import AdBanner from "@/components/adbanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RankingCriteriaSection from "@/components/RankingCriteriaSection";
import TestingContentSection from "@/components/TestingContentSection";
import ProductRankings from "@/components/ProductRankings";
import HormoneSwapSection from "@/components/HormoneSwapSection";
import BuyingGuideSection from "@/components/BuyingGuideSection";
import RedFlagsSection from "@/components/RedFlagsSection";
import AnswerSection from "@/components/AnswerSection";
import LimitedTimeOfferSection from "@/components/LimitedTimeOfferSection";
import Footer from "@/components/Footer";
import { PatchData } from "@/types/patch";

export default function Home() {
  // Array of 5 GLP-1 patches data
  const patchesData: PatchData[] = [
    {
      rank: 1,
      name: "AgeSlim - GLP-1 Slimming Patch",
      company: "AgeSlim",
      grade: "A+",
      rating: 9.9,
      stars: 5,
      link: "https://ageslim.com/pages/glp-1",
      image: "/ageslim.png",
      hasAward: true,
      hasPromotion: true,
      promotionText: "LIMITED-TIME BLACK FRIDAY DEAL — Buy 2 Get 1 FREE + 70% OFF sitewide + FREE gift included!",
      breakdown: `Look, we've tested countless weight-management solutions — but AgeSlim GLP-1 clearly outperforms every other option we tested.”. These aren't ordinary patches; they're precision-engineered hormonal balance systems that help calm cravings and rebalance metabolism within days.

What makes AgeSlim special is its fusion of true 12-hour steady-release technology and genuine endocrinology expertise. The proprietary Berberine-Plus Complex supports metabolic function and appetite control while aligning with the body’s natural rhythm — something cheap copycats simply can’t replicate.

Designed in collaboration with women’s health specialists, each patch offers targeted hormonal support for smoother energy, balanced mood, and reduced midlife weight fluctuations. The hypoallergenic adhesive stays secure and gentle even through hot flashes or workouts, ensuring consistent nutrient absorption without irritation.

Real users repeatedly describe it as “a nutritionist and hormone specialist in patch form.” And with AgeSlim’s 30-day money-back guarantee plus frequent bundle offers, it’s a no-brainer to test risk-free.`,
      ratings: {
        effectiveness: 99,
        medicalQuality: 98,
        valueForMoney: 99,
        returnPolicy: 99,
        customerSatisfaction: 97
      },
      pros: [
        'Advanced 12-hour steady-release system for consistent results',
        'Breathable, waterproof, and comfortable for daily wear',
        'Formulated in collaboration with women’s health specialists',
        'Gentle, zero-irritation design ideal for sensitive skin',
        'Clinically inspired Berberine+ complex for enhanced GLP-1 activity',
        'Helps curb appetite and rebalance metabolism naturally',
        'Medical-grade, hypoallergenic adhesive for secure placement',
        'Targets hormonal weight fluctuations and insulin sensitivity',
        'Effective support through all stages of perimenopause and menopause'
      ],
      cons: [
        'Limited availability in some regions',
        'Slightly higher price point compared to generic patches — but justified by its premium formulation and proven results'
      ],
      
      bottomLine: `
      AgeSlim GLP-1 is the clear front-runner in the new generation of weight-management patches. It blends genuine endocrinology expertise with advanced transdermal delivery technology — delivering professional-grade results at a surprisingly accessible price.

With limited-time bundle promotions, Black Friday savings, and a 30-day money-back guarantee, AgeSlim makes it easier than ever to begin restoring hormonal balance and appetite control naturally.

Backed by exceptional customer support, free shipping, and consistently positive user feedback, AgeSlim GLP-1 earned our panel’s unanimous vote as the best weight-management support patch of 2025.
      `
    },
    {
      rank: 2,
      name: "PatchAid GLP-1 Support Patch",
      company: "KindPatches",
      grade: "A-",
      rating: 8.9,
      link: "https://patchaid.com/",
      stars: 4,
      image: "/PatchAid.webp",
      hasAward: false,
      hasPromotion: false,
      promotionText: "🔥 Limited Time: 40% OFF + Free Shipping on 3-Month Supply",
      breakdown: `Patch Aid has earned its position as our #2 pick thanks to its consistent performance and strong customer satisfaction. While it doesn’t quite reach the innovation level of AgeSlim, it remains a dependable option for those looking to support hormonal balance and steady weight management.

Its standout feature is the Dual-Phase Release System — delivering an initial boost in appetite control within hours, followed by sustained metabolic support for up to 10 hours. The formula combines clinically recognized ingredients such as Chromium Picolinate and Green Coffee Bean Extract, working together to promote healthy glucose metabolism and energy balance.

During testing, I was particularly impressed by its durability. The patch stayed secure through workouts, long workdays, and even hot, humid conditions — all without skin irritation. Its hypoallergenic adhesive makes it suitable for those with sensitive skin who still want reliable daily wear.

Patch Aid’s customer service is fast and responsive, and their 60-day satisfaction guarantee offers added confidence. Though it’s priced slightly higher than some competitors, the quality and performance make it a worthwhile investment for anyone seeking consistent GLP-1 support without compromise.`,
      ratings: {
        effectiveness: 88,
        medicalQuality: 85,
        valueForMoney: 87,
        returnPolicy: 88,
        customerSatisfaction: 87
      },
      pros: [
        'Dual-Phase Release technology for extended support',
        'Excellent adhesion and durability',
        'Clinically-studied ingredient blend',
        'Gentle on sensitive skin',
        '60-day money-back guarantee',
        'Fast-acting appetite suppression',
        'Waterproof and sweat-resistant',
        'Third-party tested for purity'
      ],
      cons: [
        'Higher price point than some alternatives',
        'Limited availability in certain regions'
      ],
      bottomLine: `PatchAid delivers consistent results with reliable technology. While it doesn't revolutionize the category like our #1 pick, it offers excellent value for those seeking a dependable GLP-1 patch with proven effectiveness and outstanding customer support.`
    },
    {
      rank: 3,
      name: "Kind Patches GLP-1 Support Patch",
      company: "Kind Patches",
      grade: "B+",
      rating: 8.7,
      stars: 4,
      link: "https://kindpatches.com/",
      image: "/KindPatches.webp",
      hasAward: false,
      hasPromotion: false,
      promotionText: "",
      breakdown: `Kind Patches rounds out our top three with a focus on premium ingredients and scientifically guided formulation. While the patch design isn’t quite as advanced as our top picks, the ingredient quality stands out — featuring pharmaceutical-grade compounds sourced from certified facilities.

Its signature feature is the “Metabolic Stack” system, blending GLP-1 support with thermogenic ingredients like Capsaicin and L-Carnitine for a more comprehensive approach to weight management. This combination enhances calorie burn and metabolic balance, though a few users reported the warming effect to be a bit strong for nighttime use.

Adhesion is solid overall, though the patches can lift slightly around the edges during intense activity. The company includes extra adhesive strips in each box — a thoughtful touch that reflects their commitment to customer satisfaction. Ingredient transparency is another strong point, with Certificates of Analysis available for every production batch.

The main downside is limited availability and a slightly complicated ordering process. While Kind Patches offers knowledgeable customer support, response times may be slower during high-demand periods. Despite that, it remains an excellent choice for those who value ingredient purity and a well-rounded metabolic support formula.`,
      ratings: {
        effectiveness: 85,
        medicalQuality: 83,
        valueForMoney: 80,
        returnPolicy: 84,
        customerSatisfaction: 86
      },
      pros: [
        'Pharmaceutical-grade ingredients',
        'Comprehensive metabolic support approach',
        'Detailed ingredient transparency',
        'Thermogenic enhancement for faster results',
        'Third-party batch testing',
        'Scientific formulation approach'
      ],
      cons: [
        'Adhesion issues during high activity',
        'Can be overstimulating for some users',
        'Complex ordering process',
        'Inconsistent product availability'
      ],
      bottomLine: `Kind Patches appeals to users who prioritize ingredient quality and scientific formulation. While the delivery system needs improvement, the premium ingredients and comprehensive approach make it a solid choice for informed consumers.`
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AdBanner />
      <RankingCriteriaSection />
      <ProductRankings patchesData={patchesData} />
      <HormoneSwapSection />
      <BuyingGuideSection />
      <RedFlagsSection />
      <AnswerSection />
      <LimitedTimeOfferSection />
      <AdBanner />
      <Footer id="contact" />
    </div>
  );
}