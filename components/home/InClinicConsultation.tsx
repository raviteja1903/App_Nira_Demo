import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const consultations = [
  {
    id: "1",
    title: "Acne & Redness Relief",
    desc:
      "Personalized diagnosis and treatment for acne, pimples, and redness from certified dermatologists and AI.",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.XB_C2vd-_cf2VrzsRmVFBwHaDt?pid=Api&P=0&h=220",
  },
  {
    id: "2",
    title: "Skin Tone & Pigmentation Care",
    desc:
      "Reduce uneven tone, hyperpigmentation, and dull skin. Track tone improvement with visual reports.",
    image:
       "https://tse4.mm.bing.net/th/id/OIP.7Bk6338LrA0fWZcnxFZl_QHaE8?pid=Api&P=0&h=220",
  },
  {
    id: "3",
    title: "Hydration & Oil Balance",
    desc:
      "Address oily zones or dry patches with AI-recommended hydration plans and dermatologist support.",
    image:
      "https://as1.ftcdn.net/jpg/08/72/87/00/1000_F_872870055_nLs2WbR41GppG1ji3WIyx4M94SHUXCDe.jpg",
  },
  {
    id: "4",
    title: "Dark Circles & Under-Eye Recovery",
    desc:
      "Reduce dark circles, fine lines, and puffiness with specialized under-eye care routines and checkups.",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.JEmgGwnvSgcDdFVLS1wiOAHaEo?pid=Api&P=0&h=220",
  },
];

export default function InClinicConsultation() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Text style={styles.heading}>
        Book an appointment for an in-clinic consultation
      </Text>
      <Text style={styles.subHeading}>
        Find experienced doctors across all specialties
      </Text>

      {/* CARDS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {consultations.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />

            <View style={styles.content}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   
    paddingVertical: 24,
    paddingHorizontal: 16,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000000", // black
    marginBottom: 6,
  },

  subHeading: {
    fontSize: 14,
    color: "#444444", // dark gray
    marginBottom: 20,
  },

  list: {
    paddingRight: 10,
  },

  card: {
    width: 280,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginRight: 16,
    overflow: "hidden",
    
  },

  image: {
    width: "100%",
    height: 160,
  },

  content: {
    padding: 16,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 8,
  },

  cardDesc: {
    fontSize: 14,
    color: "#555555",
    lineHeight: 22,
  },
});
