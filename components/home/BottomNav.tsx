import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";

const tabs = [
  {
    key: "index",
    label: "Home",
    icon: "home",
    route: "/(tabs)/home",
  },
  {
    key: "collections",
    label: "Collections",
    icon: "apps",
    route: "/(tabs)/collections",
  },
  {
    key: "analyser",
    label: "Skin Analyser",
    icon: "sparkles",
    route: "/(tabs)/analyser",
  },
  {
    key: "mcash",
    label: "Mcash",
    icon: "medal-outline",
    route: "/(tabs)/mcash",
  },
  {
    key: "account",
    label: "Account",
    icon: "person-outline",
    route: "/(tabs)/account",
  },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.nav}>
      {tabs.map((item) => {
        const isActive = pathname === item.route;

        return (
          <TouchableOpacity
            key={item.key}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => router.push(item.route)}
            activeOpacity={0.8}
          >
            <Ionicons
              name={item.icon as any}
              size={22}
              color={isActive ? "#000000" : "#9A9A9A"}
            />
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  
  nav: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: "#F2F2F2",
  },
  label: {
    marginTop: 4,
    fontSize: 11,
    color: "#9A9A9A",
    fontWeight: "500",
  },
  activeLabel: {
    color: "#000000",
    fontWeight: "600",
  },
});
