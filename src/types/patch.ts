export interface PatchData {
  rank: number;
  name: string;
  company: string;
  grade: string;
  link: string;
  rating: number;
  stars: number;
  image: string;
  gradeText: string;
  hasAward: boolean;
  hasPromotion: boolean;
  promotionText: string;
  breakdown: string;
  ratings: {
    effectiveness: number;
    medicalQuality: number;
    valueForMoney: number;
    returnPolicy: number;
    customerSatisfaction: number;
  };
  pros: string[];
  cons: string[];
  bottomLine: string;
} 