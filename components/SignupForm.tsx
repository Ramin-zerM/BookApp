import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

type SignupFormProps = {
    onSubmit: (username: string, email: string, password: string) => void;
    onNavigateSignin: () => void;
    };

    const SignupForm: React.FC<SignupFormProps> = ({ onSubmit, onNavigateSignin }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
        <AuthInput
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
        />
        <AuthInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
        />
        <AuthInput
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />

        <AuthButton title="Sign Up" onPress={() => onSubmit(username, email, password)} />

        <View style={styles.signinContainer}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={onNavigateSignin}>
            <Text style={styles.signinText}>Sign in</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    };

    const styles = StyleSheet.create({
    signinContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 24,
    },
    signinText: {
        fontWeight: "600",
        color: "#2563EB", 
    },
    });

export default SignupForm;
