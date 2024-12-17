
// import { View, Text } from "react-native";
// import React from "react";
// import { Tabs } from "expo-router";
// import Feather from "@expo/vector-icons/Feather";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import AntDesign from "@expo/vector-icons/AntDesign";

// // Tab Icon Component
// const TabIcon = ({ library, icon, color, name, focused }) => {
//   const IconComponent =
//     library === "Feather"
//       ? Feather
//       : library === "MaterialIcons"
//       ? MaterialIcons
//       : library === "AntDesign"
//       ? AntDesign
//       : null;

//   return (
//     <View className="flex items-center justify-center h-16 w-16">
//       {IconComponent && (
//         <IconComponent
//           name={icon}
//           size={24}
//           color={focused ? "#2196F3" : "#42A5F5"}
//           className="mt-auto"
//         />
//       )}
//       <Text
//         className={`mt-1 text-xs ${
//           focused ? "font-merriweatherbold text-Bluemodern" : "text-Bluecalm"
//         }`}
//       >
//         {name}
//       </Text>
//     </View>
//   );
// };

// const TabsLayout = () => {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: "#FFC745",
//         tabBarInactiveTintColor: "#007A78",
//         tabBarStyle: {
//             backgroundColor: "#161622",
//             borderTopWidth: 0,
//             },
//       }}
//     >
//       {/* Home Tab */}
//       <Tabs.Screen
//         name="home"
//         options={{
//           title: "Home",
//           headerShown: false,
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon
//               library="Feather"
//               icon="home"
//               name="Home"
//               color={color}
//               focused={focused}
//             />
//           ),
//         }}
//       />

//       {/* Explore Tab */}
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: "Explore",
//           headerShown: false,
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon
//               library="MaterialIcons"
//               icon="travel-explore"
//               name="Explore"
//               color={color}
//               focused={focused}
//             />
//           ),
//         }}
//       />

//       {/* Setting Tab */}
//       <Tabs.Screen
//         name="setting"
//         options={{
//           title: "Setting",
//           headerShown: false,
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon
//               library="AntDesign"
//               icon="setting"
//               name="Setting"
//               color={color}
//               focused={focused}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// };

// export default TabsLayout;
import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

// Tab Icon Component
const TabIcon = ({ library, icon, color, name, focused }) => {
  const IconComponent =
    library === "Feather"
      ? Feather
      : library === "MaterialIcons"
      ? MaterialIcons
      : library === "AntDesign"
      ? AntDesign
      : null;

  return (
    <View className="flex items-center justify-center h-16 w-16">
      {IconComponent && (
        <IconComponent
          name={icon}
          size={24}
          color={color}  
          className="mt-auto"
        />
      )}
      <Text
        className={`mt-1 text-xs ${focused ? "font-merriweatherbold text-Bluemodern" : "text-Bluecalm"}`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#6c56f2",  
        tabBarInactiveTintColor: "#007A78",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              library="Feather"
              icon="home"
              name="Home"
              color={color}  // This will pass the active/inactive color to the icon
              focused={focused}
            />
          ),
        }}
      />

      {/* Explore Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              library="MaterialIcons"
              icon="travel-explore"
              name="Explore"
              color={color}  // This will pass the active/inactive color to the icon
              focused={focused}
            />
          ),
        }}
      />

      {/* Setting Tab */}
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              library="AntDesign"
              icon="setting"
              name="Setting"
              color={color}  // This will pass the active/inactive color to the icon
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;