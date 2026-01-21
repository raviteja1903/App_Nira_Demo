import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* ================= DATA ================= */

const history = [
  {
    id: "1",
    title: "Order #1024",
    type: "Reward Earned",
    btc: "+0.00012 BTC",
    date: "12 Sep 2026",
    status: "credit",
  },
  {
    id: "2",
    title: "Order #1021",
    type: "Reward Earned",
    btc: "+0.00008 BTC",
    date: "10 Sep 2026",
    status: "credit",
  },
  {
    id: "3",
    title: "Withdrawal",
    type: "BTC Withdrawn",
    btc: "-0.00020 BTC",
    date: "08 Sep 2026",
    status: "debit",
  },
];

/* ================= COMPONENT ================= */

export default function BitcoinHistoryScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="time-outline" size={22} color="#000" />
        <Text style={styles.headerTitle}>Bitcoin History</Text>
      </View>

      {/* HISTORY LIST */}
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            {/* LEFT ICON */}
            <View
              style={[
                styles.iconCircle,
                {
                  backgroundColor:
                    item.status === "credit" ? "#E8F8F2" : "#FDECEC",
                },
              ]}
            >
              <Ionicons
                name={
                  item.status === "credit"
                    ? "arrow-down-outline"
                    : "arrow-up-outline"
                }
                size={18}
                color={item.status === "credit" ? "#2ECC71" : "#E74C3C"}
              />
            </View>

            {/* TEXT */}
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.type}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>

            {/* AMOUNT */}
            <Text
              style={[
                styles.btc,
                { color: item.status === "credit" ? "#2ECC71" : "#E74C3C" },
              ]}
            >
              {item.btc}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
    color: "#000",
  },

  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
  },

  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },

  subTitle: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },

  date: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },

  btc: {
    fontSize: 14,
    fontWeight: "700",
  },
});
