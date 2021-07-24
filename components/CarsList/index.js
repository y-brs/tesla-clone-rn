import React from "react";
import { FlatList, View, Dimensions } from "react-native";
import CarItem from "../CarItem";
import styles from "./styles";
import cars from "./cars";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} key={1} />}
        snapToAligment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default CarsList;
