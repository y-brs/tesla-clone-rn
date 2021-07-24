import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = ({ type, title, onPress }) => {
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const color = type === "primary" ? "#fff" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, {color}]}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default StyledButton;
