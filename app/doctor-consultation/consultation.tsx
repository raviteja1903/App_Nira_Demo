import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomNav from "@/components/home/BottomNav";
import Header from "@/components/home/Header";

export default function ConsultationSpecialities() {
  return (
    <>
      {/* Hide Expo default header */}
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <SafeAreaView style={styles.safe}>
        {/* MAIN CONTENT */}
        <View style={styles.container}>
          <Text style={styles.title}>Consultation Specialities</Text>

          <View style={styles.contentPlaceholder} />
        </View>
      </SafeAreaView>
      <BottomNav />
    </>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 16,
  },

  contentPlaceholder: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
