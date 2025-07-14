import AdBanner from "@/components/adbanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
      name: "Gentle Patches - GLP-1 Slimming Patch",
      company: "Gentle Patches",
      grade: "A+",
      rating: 9.8,
      stars: 5,
      image: "/patch.png",
      hasAward: true,
      hasPromotion: true,
      promotionText: "Buy 2 Get 1 FREE special promotion available through our exclusive link",
      breakdown: `Listen, I've tested a LOT of weight loss solutions, but Gentle Patches GLP-1 is in a different league entirely. These aren't just patches—they're hormonal rebalancing systems that somehow managed to make my uncontrollable evening cravings disappear in under two weeks. What makes these special? It's the perfect marriage of "transdermal technology" and actual endocrinological expertise (not just marketing hype).

The revolutionary steady-release system with true 12-hour technology delivers ingredients exactly as your body needs them, while the proprietary Berberine complex gives your metabolism the boost it's been begging for since perimenopause hit. These weren't designed by some marketing intern with a weight loss blog. Gentle Patches collaborated with actual women's health specialists to create a patch that provides optimal hormonal support while simultaneously addressing the root causes of midlife weight gain.

It's like having a personal nutritionist and hormone specialist for your metabolism—all day, every day. The hypoallergenic adhesive doesn't just keep the patch firmly in place during hot flashes—it actually allows for optimal ingredient absorption without skin irritation. This is HUGE if you're dealing with sensitive skin or hormonal reactions (I interviewed seven women with rosacea who swear these are the only patches that don't trigger flare-ups).

And here's the kicker: Gentle Patches offers a 30-day money-back guarantee and frequent buy-two-get-one deals. You can test them risk-free and return them hassle-free if they don't work for you (though I seriously doubt you'll want to).`,
      ratings: {
        effectiveness: 99,
        medicalQuality: 98,
        valueForMoney: 99,
        returnPolicy: 99,
        customerSatisfaction: 97
      },
      pros: [
        'Revolutionary "steady-release technology" for 12-hour support',
        'Breathable, waterproof construction',
        'Medically developed with women\'s health specialists',
        'Zero-irritation formula for sensitive skin',
        'Premium Berberine complex for optimal GLP-1 support',
        'Improves metabolic health and reduces cravings',
        'Hypoallergenic, medical-grade adhesive',
        'Ideal for hormonal weight gain and insulin resistance',
        'Suitable for all stages of menopause'
      ],
      cons: [
        'Often sold out due to high demand (seriously, they can\'t make these fast enough)'
      ],
      bottomLine: `Gentle Patches GLP-1 is the undisputed champion in the weight management patch category. It combines medical expertise with innovative delivery technology at a price point that should honestly be way higher.

Their limited-time bundle offers make the transition to hormonal balance particularly attractive. Gentle Patches impresses with first-class customer service, free shipping, and a straightforward money-back guarantee. Our testing team unanimously voted the Gentle Patches GLP-1 as the best weight management support product of 2025.`
    },
    {
      rank: 2,
      name: "SlimFlex Pro - Advanced GLP-1 Patch",
      company: "SlimFlex",
      grade: "A",
      rating: 9.2,
      stars: 5,
      image: "/patch.png",
      hasAward: false,
      hasPromotion: true,
      promotionText: "🔥 Limited Time: 40% OFF + Free Shipping on 3-Month Supply",
      breakdown: `SlimFlex Pro has earned its spot as our #2 pick through consistent performance and impressive customer satisfaction rates. While it doesn't quite match Gentle Patches' revolutionary technology, it offers a solid alternative with proven results for hormonal weight management.

The standout feature is their "Dual-Phase Release" system that provides initial appetite suppression within 2-3 hours, followed by sustained metabolic support for up to 10 hours. The blend includes clinically-studied ingredients like Chromium Picolinate and Green Coffee Bean Extract, which work synergistically to support healthy glucose metabolism.

What impressed me most during testing was the patch's durability. It stayed firmly attached through intense workouts, long workdays, and even beach vacations. The adhesive is gentle on sensitive skin, and I experienced zero irritation during the 8-week trial period.

Customer service is responsive, and they offer a solid 60-day satisfaction guarantee. While the price point is higher than some competitors, the quality justifies the investment for those seeking a reliable GLP-1 support system.`,
      ratings: {
        effectiveness: 92,
        medicalQuality: 90,
        valueForMoney: 88,
        returnPolicy: 95,
        customerSatisfaction: 93
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
      bottomLine: `SlimFlex Pro delivers consistent results with reliable technology. While it doesn't revolutionize the category like our #1 pick, it offers excellent value for those seeking a dependable GLP-1 patch with proven effectiveness and outstanding customer support.`
    },
    {
      rank: 3,
      name: "MetaBoost Elite - Premium GLP-1 System",
      company: "MetaBoost",
      grade: "B+",
      rating: 8.7,
      stars: 4,
      image: "/patch.png",
      hasAward: false,
      hasPromotion: false,
      promotionText: "",
      breakdown: `MetaBoost Elite rounds out our top 3 with a focus on premium ingredients and scientific formulation. While the patch design isn't as advanced as our top picks, the ingredient quality is exceptional, featuring pharmaceutical-grade compounds sourced from certified facilities.

The unique selling point is their "Metabolic Stack" approach, combining traditional GLP-1 support with thermogenic compounds like Capsaicin and L-Carnitine. This creates a more comprehensive approach to weight management, though some users found the thermogenic effect too stimulating for evening use.

Adhesion is good but not great—the patches occasionally lifted at the edges during high-activity days. However, the company provides extra adhesive strips, which shows attention to customer needs. The ingredient transparency is impressive, with detailed CoAs available for each batch.

The main drawback is inconsistent availability and a somewhat complex ordering process. Customer service, while knowledgeable, can be slow to respond during peak periods.`,
      ratings: {
        effectiveness: 87,
        medicalQuality: 92,
        valueForMoney: 82,
        returnPolicy: 85,
        customerSatisfaction: 88
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
      bottomLine: `MetaBoost Elite appeals to users who prioritize ingredient quality and scientific formulation. While the delivery system needs improvement, the premium ingredients and comprehensive approach make it a solid choice for informed consumers.`
    },
    {
      rank: 4,
      name: "VitaSlim Patches - Natural GLP-1 Support",
      company: "VitaSlim",
      grade: "B",
      rating: 8.1,
      stars: 4,
      image: "/patch.png",
      hasAward: false,
      hasPromotion: true,
      promotionText: "🌿 Natural Formula - Save 25% on First Order",
      breakdown: `VitaSlim takes a more natural approach to GLP-1 support, using herbal extracts and plant-based compounds instead of synthetic alternatives. For users preferring natural solutions, this patch offers a gentler introduction to transdermal weight management.

The standout ingredients include Gymnema Sylvestre, Bitter Melon Extract, and White Kidney Bean Extract—all traditionally used for blood sugar and appetite management. While the effects are more subtle than synthetic alternatives, many users appreciate the gentle, side-effect-free experience.

The patch design is basic but functional. Adhesion is adequate for normal daily activities, though it may need replacement if exposed to excessive moisture. The natural approach means results take longer to appear—typically 3-4 weeks versus 1-2 weeks for synthetic formulations.

Customer feedback is generally positive, particularly from users seeking natural alternatives to pharmaceutical approaches. The price point is reasonable, making it accessible for long-term use.`,
      ratings: {
        effectiveness: 81,
        medicalQuality: 78,
        valueForMoney: 85,
        returnPolicy: 80,
        customerSatisfaction: 82
      },
      pros: [
        'Natural, plant-based ingredients',
        'Gentle with minimal side effects',
        'Affordable price point',
        'Suitable for sensitive individuals',
        'Traditional herbal wisdom combined with modern delivery',
        'Good for long-term maintenance use'
      ],
      cons: [
        'Results take longer to appear',
        'Less potent than synthetic alternatives',
        'Basic patch design and adhesion',
        'Limited clinical research on specific blend'
      ],
      bottomLine: `VitaSlim offers a natural entry point into GLP-1 patch therapy. While not as powerful as synthetic alternatives, it provides a gentle, affordable option for users prioritizing natural ingredients and minimal side effects.`
    },
    {
      rank: 5,
      name: "PowerPatch GLP-1 - Budget Friendly",
      company: "PowerPatch",
      grade: "C+",
      rating: 7.3,
      stars: 3,
      image: "/patch.png",
      hasAward: false,
      hasPromotion: true,
      promotionText: "💰 Budget Pick - Free Shipping on Orders Over $30",
      breakdown: `PowerPatch rounds out our list as the budget-friendly option that still delivers basic GLP-1 support. While it lacks the advanced features of premium patches, it provides an affordable entry point for users wanting to try transdermal weight management.

The ingredient profile is simpler, focusing on basic appetite suppressants like Hoodia Gordonii and 5-HTP. The patch technology is straightforward—no fancy release systems or advanced adhesives, but it gets the job done for basic appetite control.

Adhesion is the biggest weakness, with patches sometimes lifting after 6-8 hours, especially during physical activity or in humid conditions. However, at this price point, replacing patches more frequently is still cost-effective for many users.

Customer service is basic but responsive, and while there's no money-back guarantee, the low price point reduces financial risk. This is best suited for users who want to test the patch concept without significant investment.`,
      ratings: {
        effectiveness: 73,
        medicalQuality: 68,
        valueForMoney: 90,
        returnPolicy: 65,
        customerSatisfaction: 75
      },
      pros: [
        'Very affordable price point',
        'Good for testing patch concept',
        'Basic appetite suppression effects',
        'Low financial commitment',
        'Simple, straightforward approach'
      ],
      cons: [
        'Poor adhesion and durability',
        'Basic ingredient profile',
        'No money-back guarantee',
        'Limited customer support',
        'May need frequent replacement'
      ],
      bottomLine: `PowerPatch serves its purpose as an affordable introduction to GLP-1 patches. While it can't compete with premium options in terms of technology or ingredients, it offers basic appetite support at a price point that makes experimentation risk-free.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AdBanner />
      <TestingContentSection />
      <ProductRankings patchesData={patchesData} />
      <HormoneSwapSection />
      <BuyingGuideSection />
      <RedFlagsSection />
      <AnswerSection />
      <LimitedTimeOfferSection />
      <AdBanner />
    </div>
  );
}
