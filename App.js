import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

const App = () => {
  const spinAnimated = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.loop(
      Animated.timing(spinAnimated, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startAnimation}>
        <Text style={styles.buttonRow}>Start Animation</Text>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                {
                  rotate: spinAnimated.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"],
                  }),
                },
              ],
            },
          ]}
        ></Animated.View>
      </TouchableOpacity>
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
