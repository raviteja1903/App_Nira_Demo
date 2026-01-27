import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DoctorDetailScreen() {
  const [selectedDay, setSelectedDay] = useState("Wed");
  const [selectedTime, setSelectedTime] = useState("10:30 am");

  const days = [
    { day: "Sun", date: 7 },
    { day: "Mon", date: 8 },
    { day: "Tue", date: 9 },
    { day: "Wed", date: 10 },
    { day: "Thu", date: 11 },
    { day: "Fri", date: 12 },
    { day: "Sat", date: 13 },
    { day: "Sun", date: 14 },
  ];

  const times = ["08:30 am", "10:30 am", "13:00 pm", "15:00 pm", "17:00 pm"];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Detail Doctor</Text>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/doctor-consultation/doctorchat",
                params: {
                  doctorName: "Dr. Gabriela Christie",
                },
              })
            }
          >
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={22}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/women/44.jpg",
            }}
            style={styles.avatar}
          />

          <View style={styles.info}>
            <Text style={styles.name}>Dr. Gabriela Christie</Text>
            <Text style={styles.speciality}>Nutrition Specialist</Text>
            <Text style={styles.location}>Los Angeles, USA</Text>

            <View style={styles.ratingRow}>
              <Ionicons name="star" size={16} color="#FFC107" />
              <Text style={styles.rating}>4.5</Text>
            </View>
          </View>
        </View>

        <View style={styles.stats}>
          <StatItem
            icon="briefcase-outline"
            label="Experience"
            value="6 Years"
          />
          <StatItem icon="people-outline" label="Patients" value="1024+" />
        </View>

        <Text style={styles.sectionTitle}>Biography</Text>
        <Text style={styles.description}>
          Dr. Gabriela Christie is a psychology specialist. She practices
          general psychology in USA. Her approach focuses on helping patients
          understand and manage their mental health effectively.
        </Text>

        <Text style={styles.sectionTitle}>Schedule</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {days.map((item) => (
            <TouchableOpacity
              key={item.date}
              style={[
                styles.dayCard,
                selectedDay === item.day && styles.dayActive,
              ]}
              onPress={() => setSelectedDay(item.day)}
            >
              <Text
                style={[
                  styles.dayText,
                  selectedDay === item.day && styles.dayTextActive,
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  selectedDay === item.day && styles.dayTextActive,
                ]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Choose Time</Text>
        <View style={styles.timeRow}>
          {times.map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeChip,
                selectedTime === time && styles.timeActive,
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text
                style={[
                  styles.timeText,
                  selectedTime === time && styles.timeTextActive,
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push({
            pathname: "/doctor-consultation/book-appointment",
          })
        }
      >
        <Text style={styles.buttonText}>Book Appointment →</Text>
      </TouchableOpacity>
    </View>
  );
}

const StatItem = ({ icon, label, value }: any) => (
  <View style={styles.statItem}>
    <Ionicons name={icon} size={20} color="#4CAF50" />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    margin: 16,
    padding: 16,
    flexDirection: "row",
  },
  avatar: {
    width: 90,
    height: 110,
    borderRadius: 12,
  },
  info: {
    marginLeft: 14,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  speciality: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },
  location: {
    fontSize: 12,
    color: "#777",
    marginVertical: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 4,
    fontWeight: "600",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 12,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontWeight: "700",
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#777",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginHorizontal: 16,
    marginTop: 16,
  },
  description: {
    fontSize: 13,
    color: "#666",
    marginHorizontal: 16,
    marginTop: 8,
    lineHeight: 20,
  },
  dayCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    alignItems: "center",
    marginHorizontal: 6,
    marginVertical: 12,
    width: 64,
  },
  dayActive: {
    backgroundColor: "#4CAF50",
  },
  dayText: {
    fontSize: 12,
    color: "#777",
  },
  dateText: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 4,
    color: "#000",
  },
  dayTextActive: {
    color: "#fff",
  },
  timeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 16,
    marginTop: 8,
  },
  timeChip: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
  },
  timeActive: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  timeText: {
    fontSize: 12,
    color: "#555",
  },
  timeTextActive: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#000",
    padding: 16,
    margin: 16,
    borderRadius: 18,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
