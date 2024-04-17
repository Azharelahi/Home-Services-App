import { View, Text } from "react-native";
import React from "react";
import Color from "./Color";

const Headings = ({ title }) => {
  return (
    <View style={{ marginTop: 10, marginBottom: 5 ,marginLeft:4}}>
      <Text style={{ fontSize: 15, fontFamily: "outfitsemibold",color:Color.PRIMARY }}>
        {title}
      </Text>
    </View>
  );
};

export default Headings;
