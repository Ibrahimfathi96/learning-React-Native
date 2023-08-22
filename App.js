import { View, StyleSheet, ActivityIndicator } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size={30} color={"black"} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  button: {
    flex: 1,
    padding: 12,
    margin: 12,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    backgroundColor: "grey",
    width: 150,
    borderRadius: 20,
  },
});
