import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

type AuthInputProps = {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    value: string;
    onChangeText: (text: string) => void;
    };

    const AuthInput: React.FC<AuthInputProps> = ({
    label,
    placeholder,
    secureTextEntry,
    value,
    onChangeText,
    }) => {
    return (
        <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor="#aaa"
        />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        width: "100%",
    },
    label: {
        marginBottom: 4,
        color: "#374151", 
        fontWeight: "500",
    },
    input: {
        width: "100%",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#D1D5DB", 
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: "#1F2937",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
});

export default AuthInput;
