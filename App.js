import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

const App = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const pressHandler = () => {
    Animated.decay(animatedValue, {
      velocity: 0.5,
      deceleration: 0.98,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pressHandler}>
        <Text style={styles.buttonRow}>Start Animation</Text>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [{ translateY: animatedValue }],
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
