import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text>Some Text</Text>
          <Text style={styles.baseText}>
            I am bold
            <Text style={styles.innerText}> and red</Text>
          </Text>
        </View>
        <View style={styles.middle}></View>
        <View style={styles.bottom} />
      </View>
      <View pointerEvents="none">
        <Button title="click Me" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  innerText: {
    color: "red",
    fontSize: 20,
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
/*
View important props
style: A style object that defines the visual appearance of the view.
the style have many properties.
onLayout: a function that called when the layout of the view changes,
pointerEvents - This prop determines how the <View> component responds to touch events,
accessible & accessibilityLabel,
*/
/*
Text Important props
numberOfLines: Limits the number of the lines of the text displayed.
ellipsizeMode: Specifies what happens if the text is too long for one line and does not fit in oneline.
accessibilityRole: The role describes the purpose of an element within your app.
onPress & onLongPress
allowFontScaling: controls whether fonts should scale to respect the text size accessibilty settings.
testId,
*/
