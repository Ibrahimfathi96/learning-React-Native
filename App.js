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
  Pressable,
  TouchableOpacity,
  Switch,
} from "react-native";
import image from "./assets/adaptive-icon.png";
export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <>
      <View style={combinedStyles}>
        <View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4d" : "#f4f3f4"}
            // ios_backgroundColor={"#3e3e3e"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text>Hi From React Native</Text>
        <Pressable
          style={baseStyles.button}
          onPress={() => console.log("Pressable")}
        >
          <Text>Press Me</Text>
        </Pressable>
        <TouchableOpacity
          style={baseStyles.button}
          onPress={() => console.log("TouchableOpacity")}
        >
          <Text>Press Me</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button //uncustomizable button to customize button use pressable
          onPress={() => console.log("Pressed")}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          disabled={false} //to disable pressing on the button
        />
      </View>
    </>
  );
  // const [IsLoaded, setIsLoaded] = useState(false);
  // const [IsError, setIsError] = useState(false);
  // const data = [
  //   {
  //     id: 1,
  //     title: "The Importance of Reading",
  //     description:
  //       "Reading is essential for learning and personal growth. It helps us to expand our knowledge, develop our imagination, and connect with others. Reading can also be a great way to relax and de-stress.",
  //   },
  //   {
  //     id: 2,
  //     title: "The Power of Positivity",
  //     description:
  //       "Positive thinking can have a profound impact on our lives. It can help us to be more optimistic, resilient, and successful. When we focus on the positive, we are more likely to attract positive experiences into our lives.",
  //   },
  //   {
  //     id: 3,
  //     title: "The Benefits of Exercise",
  //     description:
  //       "Exercise is not only good for our physical health, but it is also good for our mental health. It can help to reduce stress, improve mood, and boost self-esteem. Exercise can also help us to sleep better and have more energy.",
  //   },
  //   {
  //     id: 4,
  //     title: "The Importance of Sleep",
  //     description:
  //       "Sleep is essential for our physical and mental health. It helps to repair our bodies, consolidate our memories, and regulate our emotions. When we do not get enough sleep, we can experience fatigue, irritability, and difficulty concentrating.",
  //   },
  //   {
  //     id: 5,
  //     title: "The Power of Gratitude",
  //     description:
  //       "Gratitude is the practice of appreciating the good things in our lives. It can help us to feel happier, more connected, and more fulfilled. When we express gratitude, we are more likely to focus on the positive and less likely to dwell on the negative.",
  //   },
  //   {
  //     id: 6,
  //     title: "The Importance of Self-Care",
  //     description:
  //       "Self-care is essential for our well-being. It is the practice of taking care of our physical, mental, and emotional health. Self-care can include activities such as getting enough sleep, eating healthy foods, exercising, and spending time with loved ones.",
  //   },
  //   {
  //     id: 7,
  //     title: "The Power of Forgiveness",
  //     description:
  //       "Forgiveness is the act of letting go of anger and resentment towards someone who has wronged us. It can be a difficult process, but it can be very healing. When we forgive, we are not saying that what happened was okay, but we are choosing to let go of the negative emotions that are holding us back.",
  //   },
  //   {
  //     id: 8,
  //     title: "The Importance of Love",
  //     description:
  //       "Love is one of the most powerful emotions we can experience. It can bring us joy, happiness, and fulfillment. Love can also help us to feel connected to others and to the world around us.",
  //   },
  //   {
  //     id: 9,
  //     title: "The Power of Hope",
  //     description:
  //       "Hope is the belief that things will get better. It can help us to persevere through difficult times and to achieve our goals. When we have hope, we are more likely to be optimistic and resilient.",
  //   },
  // ];
  // return (
  // <ScrollView
  //   contentContainerStyle={{
  //     backgroundColor: "grey",
  //     padding: "6",
  //     margin: "6",
  //   }}
  // >
  //   {data.map((item) => (
  //     <View style={{ margin: 16 }} key={item.id}>
  //       <Text style={{ fontSize: 30 }}>{item.title}</Text>
  //       <Text>{item.description}</Text>
  //     </View>
  //   ))}
  // </ScrollView>
  // <>
  //   <View style={styles.container}>
  //     <View style={styles.top}>
  //       <Text>Some Text</Text>
  //       <Text style={styles.baseText}>
  //         I am bold
  //         <Text style={styles.innerText}> and red</Text>
  //       </Text>
  //     </View>
  //     <View style={styles.middle}>
  //       <TextInput
  //         style={{
  //           backgroundColor: "pink",
  //           width: 300,
  //           borderRadius: 20,
  //           padding: 4,
  //           fontSize: 20,
  //         }}
  //         placeholder="Type here..."
  //         onFocus={()=>console.log("Focused")}
  //         onBlur={()=>console.log("Blurred")}
  //         placeholderTextColor={"grey"}
  //         onChangeText={(val) => console.log(val)}
  //       ></TextInput>
  //     </View>
  //     <View style={styles.bottom}>
  //       <Image
  //         onLoad={() => setIsLoaded(true)}
  //         onError={() => setIsError(true)}
  //         source={{
  //           uri: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
  //         }}
  //         style={{ width: 150, height: 150 }}
  //       />
  //       <Text>{IsLoaded && "Image loaded"}</Text>
  //       <Text>{!IsError && "Image Error"}</Text>
  //     </View>
  //   </View>
  //   <View pointerEvents="none">
  //     <Button title="click Me" />
  //   </View>
  // </>
  // );
}
//stylesheet compose
const isActive = true;
const baseStyles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ddd",
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});
const activeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    borderWidth: 1,
  },
});
const inActiveStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    borderWidth: 1,
  },
});
const combinedStyles = StyleSheet.compose(
  baseStyles.container,
  isActive ? activeStyles.container : inActiveStyles.container
);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-between",
//     backgroundColor: "#fff",
//     padding: 20,
//     margin: 10,
//   },
//   baseText: {
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   innerText: {
//     color: "red",
//     fontSize: 20,
//   },
//   top: {
//     flex: 0.3,
//     backgroundColor: "grey",
//     borderWidth: 5,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   middle: {
//     flex: 0.3,
//     backgroundColor: "beige",
//     borderWidth: 5,
//     alignItems: "center",
//   },
//   bottom: {
//     flex: 0.3,
//     backgroundColor: "pink",
//     borderWidth: 5,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
// });
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
autoCapitalized:Determines if the first letter of each word should 
be capitalized.=>
default"none" /  
"words"All Words Capitalized In The / 
"characters"  ALLCHARA /
"sentences" All Sentences Caps /
autoCorrect"true"
onContentSizeChanges{(e)=>console.log(e.nativeEvent.content)}
editable: "true" by default if false can focus and change in the textInput
onSubmitEditing.
*/
/*
ScrollView Important Props  <ScrollView></ScrollView>
contentContainerStyle
horizontal: to set the scroll to be horizontal
showsVerticalScrollIndicator: shows vertical scrollbar"boolean"
showsHorizontalScrollIndicator: shows horizantal scrollbar"boolean"
scrollEnable by default is "true" "false" to disable the scrolling
onScroll: function will be called when the user scrolls the view and the function
will recieve an event object that contains info about scroll positions
such as x,y position {(e)=>console.log(e.nativeEvent.contentOffest)}
keyboardDismissMode: how keyboard dismiss works => 'on-drag'
                            'none'/'interactive'/ 'on-drag'
*/
/*
StyleSheet important Props
compose:Combines two styles
flatten: *pretty much like compose*Flattens an array of style objects, into one aggregated style object.
create: Creates a new StyleSheet with rules defined inline (not recommended)
*/
