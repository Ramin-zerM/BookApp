import { View, StyleSheet } from "react-native";

const ScreenContainer = ({ children }: any) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2E6EE",
    padding: 16,
  },
});

export default ScreenContainer;
