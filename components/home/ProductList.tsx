import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";
 
const PRODUCTS = [
  {
    title: "Radiant Serum",
    desc: "Daily glow serum",
    image: "https://www.nira-ai.co.in/assets/salicylic_lha_cleanser.png",
  },
  {
    title: "Gentle Cleanser",
    desc: "Soothing cleanser",
    image: "https://www.nira-ai.co.in/assets/spf50_sunscreen.png",
  },
  {
    title: "Night Cream",
    desc: "Hydrating formula",
    image: "https://www.nira-ai.co.in/assets/salicylic_acid_serum.png",
  },
  {
    title: "Vitamin C Serum",
    desc: "Brightening skin",
    image: "https://www.nira-ai.co.in/assets/vitamin_c_serum.png",
  },
  {
    title: "Aloe Moisturizer",
    desc: "Deep hydration",
    image: "https://www.nira-ai.co.in/assets/img19-5TLsh0Ii.jpg",
  },
  {
    title: "Sunscreen SPF 50",
    desc: "UV protection",
    image: "https://www.nira-ai.co.in/assets/niacinamide_10_serum.png",
  },
  {
    title: "Face Toner",
    desc: "Pore tightening",
    image: "https://www.nira-ai.co.in/assets/alpha_arbutin_serum.png",
  },
  {
    title: "Under Eye Cream",
    desc: "Reduces dark circles",
    image: "https://www.nira-ai.co.in/assets/niacinamide_5_serum.png",
  },
  {
    title: "Charcoal Mask",
    desc: "Deep cleanse",
    image: "https://www.nira-ai.co.in/assets/pha_toner.png",
  },
  {
    title: "Rose Water",
    desc: "Refreshing mist",
    image: "https://www.nira-ai.co.in/assets/marula_oil_moisturizer.png",
  },
  {
    title: "Anti Acne Gel",
    desc: "Clear skin formula",
    image: "https://www.nira-ai.co.in/assets/vitamin_c_e_ferulic_serum.png",
  },
  {
    title: "Lip Balm",
    desc: "Soft & smooth lips",
    image: "https://www.nira-ai.co.in/assets/hyaluronic_pga_serum.png",
  },
  {
    title: "Face Scrub",
    desc: "Gentle exfoliation",
    image: "https://www.nira-ai.co.in/assets/retinol_serum.png",
  },
  {
    title: "Hair Serum",
    desc: "Silky shine",
    image: "https://www.nira-ai.co.in/assets/aha_pha_bha_peel.png",
  },
  {
    title: "Body Lotion",
    desc: "All day moisture",
    image: "https://www.nira-ai.co.in/assets/spf60_sunscreen.png",
  },
  {
    title: "Foot Cream",
    desc: "Crack repair",
    image: "https://www.nira-ai.co.in/assets/glycolic_8_liquid.png",
  },
  {
    title: "Hand Cream",
    desc: "Soft hands",
    image: "https://www.nira-ai.co.in/assets/zinc_serum.png",
  },
  {
    title: "Makeup Remover",
    desc: "Gentle cleanse",
    image: "https://www.nira-ai.co.in/assets/ceramide_moisturizer.png",
  },
  {
    title: "Face Oil",
    desc: "Nourishing blend",
    image: "https://www.nira-ai.co.in/assets/kojic_acid_serum.png",
  },
];

 
export default function ProductList() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      {PRODUCTS.map((item, index) => (
        <ProductCard
          key={index}
          title={item.title}
          desc={item.desc}
          image={item.image}
        />
      ))}
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    gap: 14,
    marginTop: 20,
    marginBottom: 20,
  },
});