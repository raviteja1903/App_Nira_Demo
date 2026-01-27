import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AppointmentSuccess() {
  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle" size={72} color="#4CAF50" />
      <Text style={styles.title}>Appointment Booked!</Text>
      <Text style={styles.subtitle}>
        Your appointment has been successfully scheduled.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/home")}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginVertical: 8,
    textAlign: "center",
  },
  button: {
    marginTop: 24,
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 14,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
