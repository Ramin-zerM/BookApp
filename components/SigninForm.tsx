import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

type SigninFormProps = {
    onSubmit: (email: string, password: string) => void;
    onNavigateSignup: () => void;
    onForgotPassword: () => void;
    };

    const SigninForm: React.FC<SigninFormProps> = ({
    onSubmit,
    onNavigateSignup,
    onForgotPassword,
    }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
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

        <AuthButton title="Sign In" onPress={() => onSubmit(email, password)} />

        <TouchableOpacity style={styles.forgotBtn} onPress={onForgotPassword}>
            <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
            <Text>Don’t have an account? </Text>
            <TouchableOpacity onPress={onNavigateSignup}>
            <Text style={styles.signupText}>Sign up</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    };

    const styles = StyleSheet.create({
    forgotBtn: {
        marginTop: 16,
        alignSelf: "flex-end",
    },
    forgotText: {
        color: "#2563EB", 
        textAlign: "right",
    },
    signupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 24,
    },
    signupText: {
        fontWeight: "600",
        color: "#2563EB",
    },
    });

export default SigninForm;
