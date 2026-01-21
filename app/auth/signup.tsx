// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";
// import { Formik } from "formik";
// import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//   name: Yup.string().required("Name required"),
//   email: Yup.string().email("Invalid email").required("Email required"),
//   password: Yup.string().min(6, "Min 6 characters").required("Password required"),
// });

// export default function SignupScreen() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create Account</Text>

//       <Formik
//         initialValues={{ name: "", email: "", password: "" }}
//         validationSchema={SignupSchema}
//         onSubmit={() => router.push("/auth/otp")}
//       >
//         {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//           <>
//             <TextInput
//               placeholder="Name"
//               style={styles.input}
//               onChangeText={handleChange("name")}
//               value={values.name}
//             />
//             {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

//             <TextInput
//               placeholder="Email"
//               style={styles.input}
//               onChangeText={handleChange("email")}
//               value={values.email}
//             />
//             {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

//             <TextInput
//               placeholder="Password"
//               secureTextEntry
//               style={styles.input}
//               onChangeText={handleChange("password")}
//               value={values.password}
//             />
//             {touched.password && errors.password && (
//               <Text style={styles.error}>{errors.password}</Text>
//             )}

//             <TouchableOpacity style={styles.button} onPress={handleSubmit as any}>
//               <Text style={styles.buttonText}>Sign Up</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </Formik>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     justifyContent: "center",
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "700",
//     marginBottom: 20,
//   },
//   input: {
//     height: 52,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 12,
//     paddingHorizontal: 14,
//     marginBottom: 8,
//   },
//   button: {
//     height: 52,
//     backgroundColor: "#000",
//     borderRadius: 26,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 16,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   error: {
//     color: "red",
//     marginBottom: 6,
//     fontSize: 12,
//   },
//   link: {
//     alignSelf: "flex-end",
//     marginBottom: 10,
//     color: "#000",
//   },
//   footer: {
//     textAlign: "center",
//     marginTop: 16,
//   },
// });
