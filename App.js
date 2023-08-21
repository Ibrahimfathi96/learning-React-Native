import { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  DrawerLayoutAndroid,
} from "react-native";
export default function App() {
  const [drawerPosition, setDrawerPosition] = useState("left");
  const drawerRef = useRef(null);
  return (
    <DrawerLayoutAndroid
      renderNavigationView={() => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            title="Close Drawer"
            style={styles.button}
            onPress={() => drawerRef.current.closeDrawer()}
          >
            <Text style={{ textAlign: "center" }}>Close Drawer</Text>
          </TouchableOpacity>
        </View>
      )}
      drawerPosition={drawerPosition}
      drawerWidth={350}
      ref={drawerRef}
    >
      <View style={styles.container}>
        <TouchableOpacity
          title="Change Position"
          style={styles.button}
          onPress={() => {
            drawerPosition === "left"
              ? setDrawerPosition("right")
              : setDrawerPosition("left");
          }}
        >
          <Text style={{ textAlign: "center" }}>Change Position</Text>
        </TouchableOpacity>
        <View style={{ height: 10, backgroundColor: "white" }}></View>
        <TouchableOpacity
          title="Open Drawer"
          style={styles.button}
          onPress={() => drawerRef.current.openDrawer()}
        >
          <Text style={{ textAlign: "center" }}>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
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
