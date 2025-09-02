import React from "react";
import { ScrollView, Text, StyleSheet, Alert } from "react-native";
import SignupForm from "../components/SignupForm";
import { useRouter } from "expo-router";

const Signup = () => {
  const router = useRouter();

  const handleSignup = async (username: string, email: string, password: string) => {
    try {
      const res = await fetch("http://10.26.144.58:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log("Signup error:", errorData);
        throw new Error(errorData.message || "Signup failed");
      }

      Alert.alert("Success", "Account created successfully!");
      router.push("/Signin");
    } catch (err: any) {
      Alert.alert("Error", err.message || "Something went wrong");
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Get Started</Text>
      <SignupForm
        onSubmit={handleSignup}
        onNavigateSignin={() => router.push("/Signin")}
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

export default Signup;
