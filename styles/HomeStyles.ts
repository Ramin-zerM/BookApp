// ../styles/HomeStyles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
  },
  header: {
    marginBottom: 100,
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#1f2937",
  },
  buttonGroup: {
    width: "100%",
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 15, 
  },
  signupButton: {
    backgroundColor: "#003092",
  },
  signupText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#294a8bff",
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#4e6898ff",
  },
  secondaryText: {
    color: "#ffffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default styles;
