import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

const App = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
      delay: 1000,
    }).start();
  }, [animatedValue]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            opacity: animatedValue,
          },
        ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 16,
    fontSize: 18,
    borderRadius: 26,
    color: "white",
    backgroundColor: "blue",
  },
});

export default App;
