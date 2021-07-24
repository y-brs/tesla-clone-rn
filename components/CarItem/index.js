import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const {carName, carTagLine, carTagLineCTA, carImage} = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={carImage}
        style={styles.carImage}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{carName}</Text>
        <Text style={styles.subTitle}>
          {carTagLine}
          {" "}
          <Text style={styles.subTitleCTA}>
            {carTagLineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
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
    </View>
  );
}

export default CarItem;
