import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import image from "./assets/adaptive-icon.png";
export default function App() {
  const [IsLoaded, setIsLoaded] = useState(false);
  const [IsError, setIsError] = useState(false);
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
        <View style={styles.middle}>
          <TextInput
            style={{
              backgroundColor: "pink",
              width: 300,
              borderRadius: 20,
              padding: 4,
              fontSize: 20,
            }}
            placeholder="Type here..."
            onFocus={()=>console.log("Focused")}
            onBlur={()=>console.log("Blurred")}
            placeholderTextColor={"grey"}
            onChangeText={(val) => console.log(val)}
          ></TextInput>
        </View>
        <View style={styles.bottom}>
          <Image
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsError(true)}
            source={{
              uri: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
            }}
            style={{ width: 150, height: 150 }}
          />
          <Text>{IsLoaded && "Image loaded"}</Text>
          <Text>{!IsError && "Image Error"}</Text>
        </View>
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
    alignItems: "center",
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
View important props <View></View>
style: A style object that defines the visual appearance of the view.
the style have many properties.
onLayout: a function that called when the layout of the view changes,
pointerEvents - This prop determines how the <View> component responds to touch events,
accessible & accessibilityLabel,
*/
/*
Text Important props  <Text></Text>
numberOfLines: Limits the number of the lines of the text displayed.
ellipsizeMode: Specifies what happens if the text is too long for one line and does not fit in oneline.
accessibilityRole: The role describes the purpose of an element within your app.
onPress & onLongPress
allowFontScaling: controls whether fonts should scale to respect the text size accessibilty settings.
testId,
*/
/*
Image important props  <Image />
***Note that for network and data images, 
***you will need to manually specify the dimensions of your image!
source={imageLocallyLinkFromAssets}
source={{uri:""}} style={{width = 300, height = 300}}
resizeMode,
onLoad{()=>function} as onError
defaultSource=> ignored in debug mode
blurRaduis={3} local or url {require('imageLinkFromAssets')}
accessibilityLabel"Image"
*/
/*
TextInput Important Props  <TextInput><TextInput/>
value:"text" cannot change it 
defaultValue: can change it 
placeHolder & placeHolderTextColor
onChangText, OnBlue Vs OnFocus
maxLength letters in the input
multiline for the overflow text {true/false}\
numberOfLines{2 / 3 / 4} max lines appear in the view of the textInput
keyboardType && secureTextEntry for password textInputs
*/
