import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../utils/Color";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useWarmUpBrowser } from "../hooks/warmUpBrowser";
WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ marginTop: "8%", alignSelf: "center", width: "98%" }}>
      {/* <Text>Login</Text> */}
      <Image
        source={require("../Images/imgm.png")}
        style={{
          width: "98%",
          height: 300,
          resizeMode: "stretch",
          alignSelf: "center",
          borderRadius: 20,
        }}
      />
      <View style={{ marginLeft: 8, marginTop: 10 }}>
        <Text style={{ fontSize: 33, fontWeight: "bold" }}>Welcome To </Text>
        <Text
          style={{ fontSize: 33, fontWeight: "bold", color: Color.PRIMARY }}
        >
          CodeBox
        </Text>
      </View>
      <View style={{ marginTop: "5%", marginLeft: "2%" }}>
        <Text style={{ fontSize: 18, color: Color.GRAY }}>
          Learn Programming to build the Real Life Projects
        </Text>
      </View>
      <TouchableOpacity onPress={onPress}
        style={{
          marginTop: "12%",
          width: "80%",
          height: 50,
          backgroundColor: Color.PRIMARY,
          alignSelf: "center",
          borderRadius: 30,
        }}
      >
        <Text style={{ color: Color.WHITE, alignSelf: "center", padding: 15 }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: "4%", alignSelf: "center" }}>
        <Text style={{ color: Color.PRIMARY }}>Create New Account!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
