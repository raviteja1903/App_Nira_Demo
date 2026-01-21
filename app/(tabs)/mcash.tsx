import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BitcoinGraphScreen from "./BitcoinGraphScreen";
import Header from "@/components/home/Header";
import BottomNav from "@/components/home/BottomNav";

export default function BitcoinRewardsScreen() {
  return (
    <>
      <Header />

      <SafeAreaView style={styles.safe}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* WALLET CARD */}
          <View style={styles.walletCard}>
            <Ionicons name="logo-bitcoin" size={42} color="#F7931A" />
            <Text style={styles.balance}>0.00234 BTC</Text>
            <Text style={styles.inr}>≈ ₹9,850</Text>

            <TouchableOpacity style={styles.withdrawBtn}>
              <Text style={styles.withdrawText}>Withdraw</Text>
            </TouchableOpacity>
          </View>

          {/* INFO */}
          <View style={styles.infoBox}>
            <Ionicons name="gift-outline" size={20} color="#E91E63" />
            <Text style={styles.infoText}>
              Earn Bitcoin on every product order with Nira AI
            </Text>
          </View>

          {/* GRAPH */}
          <BitcoinGraphScreen />
        </ScrollView>
      </SafeAreaView>

      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },

  scrollContent: {
    padding: 12,
    paddingBottom: 80,
  },

  walletCard: {
    backgroundColor: "#000",
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 16,
  },

  balance: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFF",
    marginTop: 10,
  },

  inr: {
    fontSize: 14,
    color: "#AAA",
    marginBottom: 14,
  },

  withdrawBtn: {
    backgroundColor: "#F7931A",
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 22,
  },

  withdrawText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 14,
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 14,
    marginBottom: 20,
  },

  infoText: {
    marginLeft: 10,
    fontSize: 13,
    color: "#333",
    flex: 1,
    lineHeight: 18,
  },
});
