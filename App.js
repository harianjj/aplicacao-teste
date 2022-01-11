import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/HomeScreen";
import Email from "./screens/EmailScreen";

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Email" component={Email} options={{ title: 'Voltar' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}