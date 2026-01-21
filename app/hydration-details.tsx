import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function HydrationVideoSection() {
  const videoRef = useRef<Video>(null);

  return (
    <View style={styles.wrapper}>
      {/* VIDEO */}
      <Video
        ref={videoRef}
        source={{
          uri: "/assets/Video-UQ7gssvg.mp4",  
        }}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
        isMuted        
        useNativeControls={false}
      />

     
      <LinearGradient
        colors={["rgba(0,0,0,0.65)", "rgba(0,0,0,0.65)"]}
        style={styles.overlay}
      />

   
      <View style={styles.textContainer}>
        <Text style={styles.glowText}>HYDRATION</Text>
        <Text style={styles.glowText}>MEETS</Text>
        <Text style={styles.glowText}>BEAUTY</Text>
        <Text style={styles.glowText}>BENEFITS</Text>
      </View>

      
      <TouchableOpacity activeOpacity={0.85} style={styles.ctaBtn}>
        <Text style={styles.ctaText}>Book Hydration Consultation</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    width: width,
    height: width * 0.6, // cinematic look
    backgroundColor: "#000",
  },

  video: {
    ...StyleSheet.absoluteFillObject,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
  },

  textContainer: {
    position: "absolute",
    top: "30%",
    alignSelf: "center",
    alignItems: "center",
  },

  glowText: {
    fontSize: 26,
    fontWeight: "800",
    color: "#FF6FB1",
    letterSpacing: 1.5,
    textShadowColor: "#FF6FB1",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 14,
    marginVertical: 2,
  },

  ctaBtn: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#FF6FB1",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
  },

  ctaText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
