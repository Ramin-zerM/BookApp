import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import styles from "../styles/HomeStyles";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
      </View>

      <View style={styles.buttonGroup}>
        <Link href={"/Signup"} asChild>
          <TouchableOpacity style={{ ...styles.button, ...styles.signupButton }}>
            <Text style={styles.signupText}>SIGN UP</Text>
          </TouchableOpacity>
        </Link>

        <Link href={"/Signin"} asChild>
          <TouchableOpacity style={{ ...styles.button, ...styles.loginButton }}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </Link>

        <Link href={"/book"} asChild>
          <TouchableOpacity style={{ ...styles.button, ...styles.secondaryButton }}>
            <Text style={styles.secondaryText}>BOOKS</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Home;
