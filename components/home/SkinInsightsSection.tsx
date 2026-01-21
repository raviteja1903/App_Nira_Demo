import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SkinInsightsSection() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* FACE IMAGE */}
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: "https://www.nira-ai.co.in/assets/chatbot5-tEY55f9-.jpg",
          }}
          style={styles.faceImage}
          resizeMode="contain"
        />
      </View>

      {/* TEXT CONTENT */}
      <Text style={styles.title}>
        Skin<Text style={styles.bold}>Insights</Text>
      </Text>

      <Text style={styles.subtitle}>Know Your Skin Health, Using AI</Text>

      <Text style={styles.desc}>
        Discover personalized care, identify concerns, and build a tailored
        routine. Take the first step to healthier skin today.
      </Text>

      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.button}
        onPress={() => router.push("/skin-analyser/skin-analyser")}
      >
        <Text style={styles.buttonText}>Try Now</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingBottom: 32,
    alignItems: "center",
  },

  imageWrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },

  faceImage: {
    width: "100%",
    height: 250,
  },

  title: {
    fontSize: 36,
    fontWeight: "300",
    color: "#111",
    marginBottom: 6,
  },

  bold: {
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 12,
    textAlign: "center",
    color: "#111",
  },

  desc: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 26,
    paddingHorizontal: 6,
  },

  button: {
    backgroundColor: "#000",
    paddingHorizontal: 44,
    paddingVertical: 14,
    borderRadius: 4,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
