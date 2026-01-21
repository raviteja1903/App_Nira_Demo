import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DoctorsConcernsCards() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Doctor Concerns</Text>
      <View style={styles.row}>
        <TouchableOpacity activeOpacity={0.85} style={styles.card}onPress={() => router.push("/doctor-consultation/consultation")}>
          <Image
            source={{
              uri: "https://www.shutterstock.com/image-photo/telemedicine-video-call-doctor-on-260nw-1813787252.jpg",
            }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Instant Video Consultation</Text>
            <Text style={styles.subtitle}>Connect Within 60 secs</Text>
          </View>
        </TouchableOpacity>

        {/* CARD 2 */}
        <TouchableOpacity activeOpacity={0.85} style={styles.card}>
          <Image
            source={{
              uri: "https://thumbs.dreamstime.com/b/youre-going-to-be-just-fine-mature-doctor-sitting-his-patient-holding-her-hand-consultation-clinic-266559851.jpg",
            }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Find Doctors Near You</Text>
            <Text style={styles.subtitle}>confirmed appointments</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
    color: "#111",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 140,
  },

  cardContent: {
    padding: 14,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 13,
    color: "#666",
  },
});
