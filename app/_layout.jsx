import { Stack } from "expo-router";

export default function RootLayout() {
  return 
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="Setting" component={Setting} />
  </Stack.Navigator>
  ;
}
