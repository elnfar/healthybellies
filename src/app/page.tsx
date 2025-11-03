import Footer from "@/components/Footer";
import Link from "next/link";
import { redirect } from "next/navigation";

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


  return redirect("/top-glp-1-patches");
  
}