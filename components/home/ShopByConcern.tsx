import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const concerns = [
  {
    id: "1",
    title: "Acne Control",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.WFwAgFDWnWErCYevlxHc-QHaEK?pid=Api&P=0&h=220",
  },
  {
    id: "2",
    title: "Oiliness",
    image:
      "https://tse3.mm.bing.net/th/id/OIP._HzY1VN4U_QcHd0p3fGC9AHaHa?pid=Api&P=0&h=220",
  },
  {
    id: "3",
    title: "Dry Skin",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.d95o5LHKfAw3Y96NvusZIAHaEK?pid=Api&P=0&h=220",
  },
  {
    id: "4",
    title: "Fine Lines / Wrinkles",
    image:
      "https://apexmedicalspa.com/wp-content/uploads/fine-lines-and-wrinkle-reduction.jpg",
  },
  {
    id: "5",
    title: "Uneven Tone",
    image:
      "https://media6.ppl-media.com/mediafiles/blogs/shutterstock_1520011988_fa263ade0f.jpg",
  },
 
];

export default function ShopByConcern() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shop by Concern</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {concerns.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.85}
            style={styles.card}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.label}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    paddingHorizontal: 16,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
    color: "#111",
  },

  card: {
    marginRight: 16,
    width: 200,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 6,
    backgroundColor: "#EEE",
  },

  label: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});
