import React from "react";
import { ScrollView, Text, StyleSheet, Alert } from "react-native";
import SigninForm from "../components/SigninForm";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signin = () => {
  const router = useRouter();

  const handleSignin = async (email: string, password: string) => {
    try {
      const res = await fetch("http://10.26.144.58:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const text = await res.text();
      console.log("Raw response:", text);

      if (!res.ok) {
        throw new Error(text || "Login failed");
      }

      const data = JSON.parse(text);
      console.log("Login success:", data);

      // ✅ สมมุติ backend ส่ง { token: "xxx", user: {...} }
      if (data.token) {
        await AsyncStorage.setItem("token", data.token);
        console.log("Token saved:", data.token);
      }

      Alert.alert("Success", "Logged in successfully!");
      router.push("/book"); // ไปหน้า book
    } catch (err: any) {
      console.error("Login error:", err);
      Alert.alert("Error", err.message || "Something went wrong");
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Welcome Back</Text>
      <SigninForm
        onSubmit={handleSignin}
        onNavigateSignup={() => router.push("/Signup")}
        onForgotPassword={() => console.log("Forgot password pressed")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F2FE",
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  title: {
    marginBottom: 32,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#1E3A8A",
  },
});

export default Signin;
