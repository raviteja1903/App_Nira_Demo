// import React from "react";
// import {
//   ScrollView,
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";

// const categories = ["All", "Hydration", "Explore", "Team", "Blogs"];

// export default function CategoryPills({ active, onChange }: any) {
//   return (
//     <ScrollView
//       horizontal
//       showsHorizontalScrollIndicator={false}
//     >
//       <View style={styles.container}>
//         {categories.map((item) => (
//           <TouchableOpacity
//             key={item}
//             activeOpacity={0.8}
//             onPress={() => onChange(item)}
//             style={[
//               styles.pill,
//               active === item && styles.active,
//             ]}
//           >
//             <Text
//               style={[
//                 styles.text,
//                 active === item && styles.activeText,
//               ]}
//             >
//               {item}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     marginTop: 18,
//   },
//   pill: {
//     paddingHorizontal: 18,
//     paddingVertical: 8,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   active: {
//     backgroundColor: "#111111",
//   },
//   text: {
//     fontSize: 13,
//     color: "#000",
//     fontWeight: "500",
//   },
//   activeText: {
//     color: "#FFFFFF",
//   },
// });
