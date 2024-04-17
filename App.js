import React from "react";
import { ClerkProvider } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import BookingScreen from "./Screens/BookingScreen/BookingScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import Color from "./utils/Color";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { useFonts } from "expo-font";
const Tab = createBottomTabNavigator();
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import Login from "./Screens/Login.js";
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    outfitbold: require("./utils/Fonts/Outfit-Bold.ttf"),
    outfitmedium: require("./utils/Fonts/Outfit-Medium.ttf"),
    outfitregular: require("./utils/Fonts/Outfit-Regular.ttf"),
    outfitsemibold: require("./utils/Fonts/Outfit-SemiBold.ttf"),
  });
  return (
    <ClerkProvider
      publishableKey="pk_test_cG9ldGljLWdhcmZpc2gtMi5jbGVyay5hY2NvdW50cy5kZXYk"
      tokenCache={tokenCache}
    >
      <SignedIn>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: Color.PRIMARY,
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="My Courses"
              component={BookingScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="book" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </ClerkProvider>
  );
};

export default App;
