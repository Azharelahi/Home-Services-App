import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";
import Color from "../../utils/Color";
import Headings from "../../utils/Headings";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCatagory();
  }, []);

  const getCatagory = () => {
    GlobalApi.getCatagory().then((resp) => {
      console.log("resp of Category", resp);
      setCategory(resp?.categories);
    });
  };
  return (
    <View>
      <Headings title={"Categories"} />
      <FlatList
        data={category}
        numColumns={4}
        renderItem={({ item, index }) => (
          <View style={{ flex: 1, alignItems: "center" }}>
            <View 
              style={{
                
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Color.PRIMARY_LIGHT,
                marginTop: "2%",
                padding: 15,
                elevation: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={{ uri: item?.icon?.url }}
                style={{ width: 50, height: 50, borderRadius: 20 }}
              />
              <Text
                style={{
                  fontFamily: "outfitregular",
                  marginTop: 2,
                  backgroundColor: Color.PRIMARY_LIGHT,
                }}
              >
                {item.name}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Categories;
