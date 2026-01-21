// import React from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
// } from "react-native";
// import { Stack, useRouter } from "expo-router";
// import { Formik } from "formik";
// import * as Yup from "yup";

// /* ================= VALIDATION ================= */
// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email("Enter a valid email")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Minimum 6 characters")
//     .required("Password is required"),
// });

// export default function LoginScreen() {
//   const router = useRouter();

//   return (
//     <>
//       <Stack.Screen options={{ headerShown: false }} />

//       {/* BACKGROUND IMAGE */}
//       <ImageBackground
//         source={require("../../assets/images/login2.png")}
//         style={styles.background}
//         resizeMode="cover"
//       >
//         {/* DARK OVERLAY */}
//         <View style={styles.overlay} />

//         {/* FORM */}
//         <View style={styles.container}>
//           <Text style={styles.title}>Login</Text>

//           <Formik
//             initialValues={{ email: "", password: "" }}
//             validationSchema={schema}
//             validateOnChange={false}
//             validateOnBlur={true}
//             onSubmit={(v) => {
//               router.push({
//                 pathname: "/auth/otp-verification",
//                 params: {
//                   purpose: "login",
//                   email: v.email,
//                 },
//               });
//             }}
//           >
//             {({
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               values,
//               errors,
//               touched,
//             }) => (
//               <>
//                 {/* EMAIL */}
//                 <TextInput
//                   placeholder="Email"
//                   placeholderTextColor="#999"
//                   keyboardType="email-address"
//                   autoCapitalize="none"
//                   style={styles.input}
//                   onChangeText={handleChange("email")}
//                   onBlur={handleBlur("email")}
//                   value={values.email}
//                 />

//                 {touched.email && errors.email && (
//                   <Text style={styles.error}>{errors.email}</Text>
//                 )}

//                 {/* PASSWORD */}
//                 <TextInput
//                   placeholder="Password"
//                   placeholderTextColor="#999"
//                   secureTextEntry
//                   style={styles.input}
//                   onChangeText={handleChange("password")}
//                   onBlur={handleBlur("password")}
//                   value={values.password}
//                 />

//                 {touched.password && errors.password && (
//                   <Text style={styles.error}>{errors.password}</Text>
//                 )}

//                 {/* FORGOT */}
//                 <TouchableOpacity
//                   onPress={() => router.push("/auth/forgot-password")}
//                 >
//                   <Text style={styles.forgot}>Forgot Password?</Text>
//                 </TouchableOpacity>

//                 {/* SUBMIT */}
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={handleSubmit as any}
//                 >
//                   <Text style={styles.buttonText}>Login</Text>
//                 </TouchableOpacity>

//                 {/* SIGNUP */}
//                 <TouchableOpacity
//                   onPress={() => router.push("/auth/signup")}
//                 >
//                   <Text style={styles.footer}>
//                     Don’t have an account?{" "}
//                     <Text style={styles.bold}>Sign up</Text>
//                   </Text>
//                 </TouchableOpacity>
//               </>
//             )}
//           </Formik>
//         </View>
//       </ImageBackground>
//     </>
//   );
// }

// /* ================= STYLES ================= */
// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "center",
//   },

//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "rgba(0,0,0,0.35)",
//   },

//   container: {
//     paddingHorizontal: 24,
//   },

//   title: {
//     fontSize: 26,
//     fontWeight: "600",
//     color: "#FFFFFF",
//     textAlign: "center",
//     marginBottom: 24,
//   },

//   input: {
//     height: 52,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 14,
//     paddingHorizontal: 16,
//     fontSize: 16,
//     marginBottom: 6,
//   },

//   error: {
//     color: "#FFD6D6",
//     fontSize: 12,
//     marginBottom: 8,
//   },

//   forgot: {
//     textAlign: "right",
//     color: "#FFFFFF",
//     fontSize: 13,
//     marginBottom: 16,
//   },

//   button: {
//     height: 52,
//     backgroundColor: "#F5B89D", // dark biscuit
//     borderRadius: 26,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   footer: {
//     textAlign: "center",
//     marginTop: 20,
//     fontSize: 14,
//     color: "#FFFFFF",
//   },

//   bold: {
//     fontWeight: "600",
//   },
// });
