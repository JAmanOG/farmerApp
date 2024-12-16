// import {  Text } from "react-native";
// import React, { useEffect } from "react";
// import { Slot, SplashScreen, Stack } from "expo-router";
// import "../global.css";
// import { useFonts } from "expo-font";
// import GlobalProvider from "../context/GlobalProvider";
// import Categories from "@/components/categories";

// SplashScreen.preventAutoHideAsync();
// const RootLayout = () => {
//   const [fontsLoaded, error] = useFonts({
//     MerriweatherBlack: require("../assets/fonts/MerriweatherBlack.ttf"),
//     merriweatherbold: require("../assets/fonts/MerriweatherBold.ttf"),
//     merriweatherbold: require("../assets/fonts/Merriweather-BoldItalic.ttf"),

//   });

//   useEffect(() => {
//     if (fontsLoaded) SplashScreen.hideAsync();
//     {
//       console.log("Fonts loaded successfully");
//     }
//     if (error) {
//       console.log("Fonts failed to load");
//     }
//     if (!fontsLoaded && !error) {
//       console.log("Fonts are still loading");
//     }
//   }, [fontsLoaded, error]);

//   return (
//     <GlobalProvider>
//     <Stack>
//       <Stack.Screen name="index" options={{
//         headerShown: false,
//       }}/>
//       <Stack.Screen name="(auth)" options={{
//         headerShown: false,
//       }}/>
//       <Stack.Screen name="(tabs)" options={{
//         headerShown: false,
//       }}/>
//       <Stack.Screen name="categories" component={
//         Categories
//       }/>
//       {/* <Stack.Screen name="/search/[query]" options={{
//         headerShown: false,
//       }}/> */}
//       {/* <Slot /> */}
//     </Stack>
//     </GlobalProvider>
//   );
// };

// export default RootLayout;
// // import {  Text } from "react-native";
// // import React, { useEffect } from "react";
// // import { Slot, SplashScreen, Stack } from "expo-router";
// // import "../global.css";
// // import { useFonts } from "expo-font";
// // import GlobalProvider from "../context/GlobalProvider";
// // import { clerkFrontendApi } from "@/lib/clerkconfig";
// //   import { ClerkProvider } from "@clerk/clerk-expo";

// // SplashScreen.preventAutoHideAsync();
// // const RootLayout = () => {
// //   const [fontsLoaded, error] = useFonts({
// //     MerriweatherBlack: require("../assets/fonts/MerriweatherBlack.ttf"),
// //     merriweatherbold: require("../assets/fonts/MerriweatherBold.ttf"),
// //     merriweatherbold: require("../assets/fonts/Merriweather-BoldItalic.ttf"),

// //   });

// //   useEffect(() => {
// //     if (fontsLoaded) SplashScreen.hideAsync();
// //     {
// //       console.log("Fonts loaded successfully");
// //     }
// //     if (error) {
// //       console.log("Fonts failed to load");
// //     }
// //     if (!fontsLoaded && !error) {
// //       console.log("Fonts are still loading");
// //     }
// //   }, [fontsLoaded, error]);

// //   return (
    
// //     <GlobalProvider>
// //           <ClerkProvider frontendApi={clerkFrontendApi}>

// //     <Stack>
// //       <Stack.Screen name="index" options={{
// //         headerShown: false,
// //       }}/>
// //       <Stack.Screen name="(auth)" options={{
// //         headerShown: false,
// //       }}/>
// //       <Stack.Screen name="(tabs)" options={{
// //         headerShown: false,
// //       }}/>
// //       {/* <Stack.Screen name="/search/[query]" options={{
// //         headerShown: false,
// //       }}/> */}
// //       {/* <Slot /> */}
// //     </Stack>
// //     </ClerkProvider >

// //     </GlobalProvider>
    
// //   );
// // };

// // export default RootLayout;

import { Text } from "react-native";
import React, { useEffect } from "react";
import { Slot, SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import GlobalProvider from "../context/GlobalProvider";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    MerriweatherBlack: require("../assets/fonts/MerriweatherBlack.ttf"),
    merriweatherbold: require("../assets/fonts/MerriweatherBold.ttf"),
    merriweatherbold: require("../assets/fonts/Merriweather-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
    if (error) {
      console.log("Fonts failed to load");
    }
    if (!fontsLoaded && !error) {
      console.log("Fonts are still loading");
    }
  }, [fontsLoaded, error]);

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="categories/categories"
          options={
            {
              title: "Categories",
            }
          }
        />
        <Stack.Screen
          name="categories/allcategories"
          options={
            {
              title: "All Categories",
            }
          }
        />
        <Stack.Screen
        name="categories/productDetailsPage"
        options={
          {
            title: "Product Details",
          }
        }
        />
        <Slot />
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;