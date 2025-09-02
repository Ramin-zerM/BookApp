import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type AuthButtonProps = {
    title: string;
    onPress: () => void;
    };

    const AuthButton: React.FC<AuthButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
    };

    const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: "#2563EB", 
        borderRadius: 12,
        paddingVertical: 14,
        marginTop: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3, 
    },
    buttonText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
    },
});

export default AuthButton;
