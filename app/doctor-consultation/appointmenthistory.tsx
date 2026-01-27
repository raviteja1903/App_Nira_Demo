import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNav from "@/components/home/BottomNav";
import Header from "@/components/home/Header";

type Appointment = {
  id: string;
  doctor: string;
  speciality: string;
  date: string;
  time: string;
  status: "Upcoming" | "Completed" | "Cancelled";
};

const appointments: Appointment[] = [
  {
    id: "1",
    doctor: "Dr. Gabriela Christie",
    speciality: "Nutrition Specialist",
    date: "12 Feb 2026",
    time: "10:30 AM",
    status: "Upcoming",
  },
  {
    id: "2",
    doctor: "Dr. Sabreena Khan",
    speciality: "Skin Care Specialist",
    date: "05 Feb 2026",
    time: "02:00 PM",
    status: "Completed",
  },
  {
    id: "3",
    doctor: "Dr. Jacob Jones",
    speciality: "Hydration Expert",
    date: "28 Jan 2026",
    time: "11:00 AM",
    status: "Cancelled",
  },
];

export default function AppointmentHistoryScreen() {
  const renderItem = ({ item }: { item: Appointment }) => {
    const statusColor =
      item.status === "Upcoming"
        ? "#4CAF50"
        : item.status === "Completed"
        ? "#2196F3"
        : "#F44336";

    return (
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.doctor}>{item.doctor}</Text>
          <Text style={[styles.status, { color: statusColor }]}>
            {item.status}
          </Text>
        </View>

        <Text style={styles.speciality}>{item.speciality}</Text>

        <View style={styles.row}>
          <View style={styles.info}>
            <Ionicons name="calendar-outline" size={16} color="#777" />
            <Text style={styles.infoText}>{item.date}</Text>
          </View>

          <View style={styles.info}>
            <Ionicons name="time-outline" size={16} color="#777" />
            <Text style={styles.infoText}>{item.time}</Text>
          </View>
        </View>

        {item.status === "Upcoming" && (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
     <>
     <Header/>
    <View style={styles.container}>
      <Text style={styles.title}>Appointment History</Text>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
    <BottomNav/>
    </>
  );
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 16,
    // paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  doctor: {
    fontSize: 16,
    fontWeight: "700",
  },
  speciality: {
    fontSize: 13,
    color: "#777",
    marginVertical: 6,
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  infoText: {
    marginLeft: 6,
    fontSize: 12,
    color: "#555",
  },
  button: {
    marginTop: 12,
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});
