import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
 

const { width } = Dimensions.get("window");

const SKIN_CONCERNS = [
  {
    title: "Acne",
    before: "https://www.nira-ai.co.in/assets/acne-after-CWEMGeZg.jpg",
    after: "https://www.nira-ai.co.in/assets/acne-after-CWEMGeZg.jpg",
  },
  {
    title: "Pigmentation",
    before: "https://www.nira-ai.co.in/assets/pigmentation-before-BrNuluy1.jpg",
    after: "https://www.nira-ai.co.in/assets/pigmentation-after-DcCLcnMm.jpg",
  },
  {
    title: "Uniformness",
    before: "https://www.nira-ai.co.in/assets/unevenskintone-before-Cgc5ZeDz.jpg",
    after: "https://www.nira-ai.co.in/assets/unevenskintone-after-OeMRixPy.jpg",
  },
  {
    title: "Pores",
    before: "https://www.nira-ai.co.in/assets/openpores-before-DReUzmUM.jpg",
    after: "https://www.nira-ai.co.in/assets/openpores-after-CsmGLECx.jpg",
  },
  {
    title: "Dark Circles",
    before: "https://www.nira-ai.co.in/assets/darkcircle-before-kwRwBi2L.jpg",
    after: "https://www.nira-ai.co.in/assets/darkcircle-after-D0DGt2OD.jpg",
  },
  {
    title: "Redness",
    before: "https://www.nira-ai.co.in/assets/redness-before-4XzPOz9_.jpg",
    after: "https://www.nira-ai.co.in/assets/redness-after-DtkffWGu.jpg",
  },
  {
    title: "Skin tone",
    before: "https://www.nira-ai.co.in/assets/skintone-dullness-DyBmzZKd.jpg",
    after: "https://www.nira-ai.co.in/assets/after-dullness-BPLNT6Di.jpg",
  },
  {
    title: "Lines",
    before: "https://www.nira-ai.co.in/assets/fineliens-wrinkles-BQk-B1Js.jpg",
    after: "https://www.nira-ai.co.in/assets/fineliens-wrinkles01-C_h6deUW.jpg",
  },
  {
    title: "Hydration",
    before: "https://www.nira-ai.co.in/assets/hydration-before-B49gEmg-.jpg",
    after: "https://www.nira-ai.co.in/assets/hydration-aftrer-D6GKrqgh.jpg",
  },
];

export default function HowAIWorksScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How AI works</Text>

      <Text style={styles.subTitle}>A COMPLETE SKIN PROFILE</Text>

      <Text style={styles.description}>
        Detect and analyze your skin strengths and areas of focus across 9
        different skin concerns, such as
      </Text>

      <View style={styles.tag}>
        <Text style={styles.tagText}>{SKIN_CONCERNS[activeIndex].title}</Text>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {SKIN_CONCERNS.map((item, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.imageBox}>
              <Text style={styles.badge}>Before</Text>
              <Image source={{ uri: item.before }} style={styles.image} />
            </View>

            <View style={styles.imageBox}>
              <Text style={styles.badge}>After</Text>
              <Image source={{ uri: item.after }} style={styles.image} />
            </View>
          </View>
        ))}
         
      </ScrollView>

      <View style={styles.dots}>
        {SKIN_CONCERNS.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: "center",
    marginTop: 30,
  },

  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },

  subTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 12,
  },

  description: {
    color: "#AAA",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 30,
    lineHeight: 20,
    marginBottom: 20,
  },

  tag: {
    backgroundColor: "#FFF",
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 30,
  },

  tagText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
  },

  slide: {
    width,
    flexDirection: "row",
  },

  imageBox: {
    width: width / 2,
    position: "relative",
  },

  image: {
    width: "100%",
    height: 260,
  },

  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#000",
    color: "#FFF",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    zIndex: 10,
  },

  dots: {
    flexDirection: "row",
    marginTop: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#555",
    marginHorizontal: 6,
  },

  activeDot: {
    backgroundColor: "#FFF",
  },
});
