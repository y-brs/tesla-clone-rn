import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.carImage}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>

      <StyledButton
        type="primary"
        title={"Custom Order"}
        onPress={() => {
          console.warn("Custom order was pressed")
        }}
      />
      <StyledButton
        type="secondary"
        title={"Existing inventory"}
        onPress={() => {
          console.warn("Existing inventory was pressed")
        }}
      />
    </View>
  );
}

export default CarItem;
