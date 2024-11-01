import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";

// Screens
import HomeScreen from "./app/screens/HomeScreen";
import BotChatRoom from "./app/screens/BotChatRoom";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="BotChatRoom"
            component={BotChatRoom}
            options={{
              title: "Chat Room",
              headerBackTitle: "Back",
              gestureEnabled: false,
              headerTintColor: "#D3D9D4",
              headerStyle: { backgroundColor: "#212A31" },
            }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
