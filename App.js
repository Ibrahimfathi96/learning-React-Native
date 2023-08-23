import { View, StyleSheet, useWindowDimensions } from "react-native";

const useStyles = () => {
  const { height, width, scale, fonstScale } = useWindowDimensions();

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      flex: 1,
    },
    left: {
      backgroundColor: "pink",
      width: width / 2,
    },
    right: {
      backgroundColor: "skyblue",
      flex: 1,
    },
  });
};
const App = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.left} />
      <View style={styles.right} />
    </View>
  );
};

export default App;
