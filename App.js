import { View, Button, Linking } from "react-native";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Send mail"
        onPress={() => Linking.openURL("mailto: support@expo.io")}
      />
      <Button
        title="Open Phone"
        onPress={() => Linking.openURL("tel:+123456789")}
      />
      <Button
        title="Open sms"
        onPress={() => Linking.openURL("sms:+123456789")}
      />
      <Button
        title="Open url"
        onPress={() =>
          Linking.openURL("https://expo.io").catch((error) =>
            console.log(error)
          )
        }
      />
    </View>
  );
};

export default App;
