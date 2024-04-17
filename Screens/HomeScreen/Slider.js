import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";
import Headings from "../../utils/Headings";

const Slider = () => {
  const [slider, setSlider] = useState();

  useEffect(() => {
    getSlider();
  }, []);
  const getSlider = () => {
    GlobalApi.getSlider().then((resp) => {
      setSlider(resp?.sliders);
    });
  };
  return (
    <View>
      <Headings title={"Offers For You"} />
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 15 }}>
            <Image
              source={{ uri: item?.image?.url }}
              style={{
                width: 200,
                height: 150,
                borderRadius: 20,
                objectFit: "cover",
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;
