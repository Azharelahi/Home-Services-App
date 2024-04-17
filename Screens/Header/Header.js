import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Color from "../../utils/Color";
import { Ionicons } from "@expo/vector-icons";
const Header = () => {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View>
        <View
          style={{
            marginTop: 10,
            marginLeft: 5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={{ uri: user?.imageUrl }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignSelf: "center",
            }}
          />
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 24, fontFamily: "outfitmedium" }}>
              Welcome
            </Text>
            <Text
              style={{
                marginTop: -3,
                fontSize: 25,
                fontWeight: "bold",
                color: Color.PRIMARY,
                fontFamily: "outfitsemibold",
              }}
            >
              {user?.fullName}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            width: "90%",
            height: 45,
            borderWidth: 1,
            borderColor: Color.PRIMARY,
            alignSelf: "center",
            borderRadius: 25,
            paddingHorizontal: 7,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            backgroundColor: Color.PRIMARY_LIGHT,
          }}
        >
          <Ionicons
            name="search"
            size={24}
            color="grey"
            style={{ alignSelf: "center" }}
          />
          <TextInput placeholder="Search" />
        </View>
      </View>
    )
  );
};

export default Header;
