import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Group = () => {
  return (
    <View style={styles.groupParent}>
      <Image
        style={[styles.groupChild, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-55.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-56.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-54.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 56,
    top: 0,
    position: "absolute",
    height: 56,
  },
  groupChild: {
    left: 80,
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 160,
  },
  groupParent: {
    width: 216,
    height: 56,
  },
});

export default Group;
