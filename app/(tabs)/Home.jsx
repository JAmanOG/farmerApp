// // import { View, Text, SafeAreaView, FlatList } from 'react-native'
// // import React from 'react'

// // const home = () => {
// //   return (
// //     <SafeAreaView>
// //       <FlatList
// //       data={[{key: 'a'}, {key: 'b'}]}
// //       keyExtractor={(item) => item.key}
// //       renderItem={({item}) => (<Text>{item.key}</Text>)}
// //       ListHeaderComponent={() => (
// //         <View>
// //           <Text>Header</Text>
// //         </View>
// //       )}
// //       />
// //     </SafeAreaView>
// //   )
// // }

// // export default home

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   SafeAreaView,
//   Alert,
// } from "react-native";
// import { Feather, FontAwesome } from "@expo/vector-icons";
// import * as Location from "expo-location";

// export default function home() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         // Request permissions for location access
//         let { status } = await Location.requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//           setErrorMsg('Permission to access location was denied');
//           return;
//         }

//         // Fetch real-time location
//         let currentLocation = await Location.getCurrentPositionAsync({});
//         console.log(currentLocation);

//         if (currentLocation) {
//           let address = await Location.reverseGeocodeAsync({
//             latitude: currentLocation.coords.latitude,
//             longitude: currentLocation.coords.longitude,
//           });
//           console.log(address);

//           if (address && address.length > 0) {
//             setLocation(address[0]); // Store the first address
//           } else {
//             setErrorMsg('Unable to fetch address');
//           }
//         }
//       } catch (error) {
//         setErrorMsg('Error fetching location');
//         console.error(error);
//       }
//     })();
//   }, []);

//   // Display error or location
//   const displayLocation = () => {
//     if (errorMsg) {
//       return errorMsg;
//     }
//     if (location) {
//       const { name, street, city } = location;
//       return `${name || ''} ${street || ''}, ${city || ''}`;
//     }
//     return 'Fetching location...';
//   };

//     return (
//       <SafeAreaView>
//         <ScrollView className="bg-white">
//           {/* Header */}
//             {/* Delivery Address Section */}
//             <View style={`flex-row justify-between items-center`}>
//               <Text style={`text-lg font-bold`}>Delivery address</Text>
//               <TouchableOpacity onPress={() => Alert.alert("Change Address")}>
//                 <Text style={`text-green-500`}>Change</Text>
//               </TouchableOpacity>
//             </View>

//             {/* Current Location */}
//             <Text style={`text-gray-600 mt-2`}>{displayLocation()}</Text>

//           {/* Search Bar */}
//           <View className="px-4">
//             <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-2">
//               <Feather name="search" size={20} color="gray" />
//               <TextInput
//                 placeholder="Search the entire shop"
//                 className="flex-1 pl-2 text-gray-700"
//               />
//             </View>
//           </View>

// {/* Banner */}
// <View className="px-4 py-4">
//   <View
//     className={
//       "bg-green-100 rounded-lg px-4 py-3 flex-row items-center"
//     }
//   >
//     <Text className={"text-gray-800 font-semibold"}>
//       Delivery is{" "}
//       <Text className={"font-bold text-green-600"}>50%</Text> cheaper
//     </Text>
//     <Image
//       source={{ uri: "https://link-to-image.com/banner.png" }}
//       className={"w-10 h-10 ml-auto"}
//     />
//   </View>
// </View>

// {/* Categories */}
// <View className={"px-4"}>
//   <View className={"flex-row justify-between items-center"}>
//     <Text className={"font-bold text-lg"}>Categories</Text>
//     <TouchableOpacity>
//       <Text className={"text-green-600"}>See all</Text>
//     </TouchableOpacity>
//   </View>
//   <ScrollView
//     horizontal
//     showsHorizontalScrollIndicator={false}
//     className={"flex-row mt-2"}
//   >
//     {["Phones", "Consoles", "Laptops", "Cameras", "Audio"].map(
//       (category, index) => (
//         <View
//           key={index}
//           className={"items-center mx-2 bg-gray-100 rounded-full p-3"}
//         >
//           <FontAwesome name="circle" size={24} color="gray" />
//           <Text className={"text-xs mt-1"}>{category}</Text>
//         </View>
//       )
//     )}
//   </ScrollView>
// </View>

//           {/* Flash Sale */}
//           <View className={"px-4 mt-6"}>
//             <View className={"flex-row justify-between items-center"}>
//               <Text className={"font-bold text-lg"}>Flash Sale</Text>
//               <TouchableOpacity>
//                 <Text className={"text-green-600"}>See all</Text>
//               </TouchableOpacity>
//             </View>
//             <View className={"bg-yellow-100 px-4 py-2 rounded-lg mt-2"}>
//               <Text className={"text-yellow-600 font-bold"}>02:59:23</Text>
//             </View>

//             {/* Flash Sale Items */}
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               className={"flex-row mt-4"}
//             >
//               {[
//                 {
//                   title: "Apple iPhone 15 Pro",
//                   price: "£699.00",
//                   originalPrice: "£739.00",
//                   image: "https://link-to-image.com/iphone.png",
//                 },
//                 {
//                   title: "Samsung Galaxy Buds Pro",
//                   price: "£69.00",
//                   originalPrice: "£85.00",
//                   image: "https://link-to-image.com/galaxy-buds.png",
//                 },
//               ].map((item, index) => (
//                 <View key={index} className={"mr-4"}>
//                   <Image
//                     source={{ uri: item.image }}
//                     className={"w-24 h-24 rounded-lg"}
//                   />
//                   <Text className={"mt-2 text-sm font-bold"}>{item.title}</Text>
//                   <View className={"flex-row items-center"}>
//                     <Text className={"font-bold text-green-600"}>
//                       {item.price}
//                     </Text>
//                     <Text className={"text-gray-400 line-through ml-2 text-sm"}>
//                       {item.originalPrice}
//                     </Text>
//                   </View>
//                 </View>
//               ))}
//             </ScrollView>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     );
// }
import React, { useState, useEffect , useContext} from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  FlatList,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import * as Location from "expo-location";
import Search from "../search/[query]";
import MapView from "react-native-maps";
import { useRouter } from "expo-router";
import {useGlobalContext} from "../../context/GlobalProvider";
import LocationContext from "../../context/LocationContext";
import { categories } from "../../constants";

export default function home() {
  const [locations, setLocations] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { user, isloggedIn, loading } = useGlobalContext();
  const { updateLocation } = useContext(LocationContext); 
  console.log("User: ", user);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        const address = await Location.reverseGeocodeAsync({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
        });
        const locationData = address[0] || {};
        setLocations(locationData);
        if (locationData) {
          updateLocation(locationData);
        } else {
          setErrorMsg("Unable to fetch address");
        }     
      } catch (error) {
        setErrorMsg("Error fetching location");
        console.error(error);
      }
    })();
  }, []);

  // const categories = [
  //   {
  //     category: "Phones",
  //     products: [
  //       { name: "Phones Product 1", price: 199.99 },
  //       { name: "Phones Product 2", price: 299.99 },
  //       { name: "Phones Product 3", price: 399.99 },
  //     ],
  //   },
  //   {
  //     category: "Consoles",
  //     products: [
  //       { name: "Consoles Product 1", price: 199.99 },
  //       { name: "Consoles Product 2", price: 299.99 },
  //       { name: "Consoles Product 3", price: 399.99 },
  //     ],
  //   },
  //   {
  //     category: "Laptops",
  //     products: [
  //       { name: "Laptops Product 1", price: 199.99 },
  //       { name: "Laptops Product 2", price: 299.99 },
  //       { name: "Laptops Product 3", price: 399.99 },
  //     ],
  //   },
  //   {
  //     category: "Cameras",
  //     products: [
  //       { name: "Cameras Product 1", price: 199.99 },
  //       { name: "Cameras Product 2", price: 299.99 },
  //       { name: "Cameras Product 3", price: 399.99 },
  //     ],
  //   },
  //   {
  //     category: "Audio",
  //     products: [
  //       { name: "Audio Product 1", price: 199.99 },
  //       { name: "Audio Product 2", price: 299.99 },
  //       { name: "Audio Product 3", price: 399.99 },
  //     ],
  //   },
  // ];
  const flashSaleItems = [
    {
      id: 1,
      title: "Apple iPhone 15 Pro",
      price: "£699.00",
      originalPrice: "£739.00",
      image: "https://link-to-image.com/iphone.png",
    },
    {
      id: 2,
      title: "Samsung Galaxy Buds Pro",
      price: "£69.00",
      originalPrice: "£85.00",
      image: "https://link-to-image.com/galaxy-buds.png",
    },
    {
      id: 3,
      title: "Samsung Galaxy Buds Pro",
      price: "£69.00",
      originalPrice: "£85.00",
      image: "https://link-to-image.com/galaxy-buds.png",
    },
    {
      id: 4,
      title: "Samsung Galaxy Buds Pro",
      price: "£69.00",
      originalPrice: "£85.00",
      image: "https://link-to-image.com/galaxy-buds.png",
    },
    {
      id: 5,
      title: "Samsung Galaxy Buds Pro",
      price: "£69.00",
      originalPrice: "£85.00",
      image: "https://link-to-image.com/galaxy-buds.png",
    },
  ];

  const displayLocation = () => {
    if (errorMsg) return errorMsg;
    console.log("Locations: ", locations);
    if (locations) {
      const { name, street, district, city } = locations;
      return `${name || ""} ${street ? street : district}, ${city || ""}`;
    }
    return "Fetching location...";
  };

  const onChangeAddress = () => {};

  return (
    <SafeAreaView>
      <ScrollView className="bg-white">
        {/* Delivery Address Section */}
        <View className="flex-row justify-between items-center mt-2 px-4">
          <Text className="text-lg font-bold">Delivery Address</Text>
          <TouchableOpacity onPress={() => Alert.alert("Change Address")}>
            <Text className="text-purple">Change</Text>
            <MapView className="w-full h-full" />
          </TouchableOpacity>
        </View>
        <Text className="text-gray-600 px-4">{displayLocation()}</Text>

        {/* Search Bar */}
        <View className="px-4 my-4">
          {/* <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-2"> */}
          <Search />
          {/* </View> */}
        </View>

        {/* Banner */}
        <View className="px-2 py-4">
          <View
            className={
              "bg-indigo-100 rounded-lg px-4 py-3 flex-row items-center"
            }
          >
            <Text className={"text-gray-800 font-semibold"}>
              Welcome back <Text className={"font-bold text-purple"}>{user.username}</Text>{" "}
              🙏
            </Text>
            <Image
              source={{ uri: "https://link-to-image.com/banner.png" }}
              className={"w-10 h-10 ml-auto"}
            />
          </View>
        </View>

        {/* Categories */}
        <View className={"px-2"}>
          <View className={"flex-row justify-between items-center"}>
            <Text className={"font-bold text-lg"}>Categories</Text>
            <TouchableOpacity
            onPress={()=>{
              router.push({
                pathname: 'categories/allcategories',
                params: {category: JSON.stringify(categories)}
              })
            }}
            >
              <Text className={"text-purple"}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className={"flex-row mt-2"}
          >
            {categories.map((name, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  console.log(name); // Check what `name` contains
                  router.push({
                    pathname: "categories/categories", // Ensure the pathname is correct
                    params: { category: JSON.stringify(name) } // Pass the name directly as an object
                                });
                }}
              >
                <View
                  key={index}
                  className={"items-center mx-2 bg-gray-100 rounded-full p-3"}
                >
                  <FontAwesome name="circle" size={24} color="gray" />
                  <Text className={"text-xs mt-1"}>{name.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Flash Sale Items */}
        <View className="px-2 mt-6">
          <Text className="font-bold text-lg">Product List</Text>
          <FlatList
            data={flashSaleItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
              onPress={() => router.push({pathname:'categories/productDetailsPage', params: { productId: item.id }})}
            >
              <View className="mr-4 border border-black p-3 rounded-lg h-45 w-45">
                <Image
                  source={{ uri: item.image }}
                  className="w-24 h-24 rounded-lg"
                />
                <Text className="mt-2 text-sm font-bold">{item.title}</Text>
                <View className="flex-row items-center">
                  <Text className="font-bold text-purple">{item.price}</Text>
                  <Text className="text-gray-400 line-through ml-2 text-sm">
                    {item.originalPrice}
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View className="px-2 mt-6">
          <Text className="font-bold text-lg">Recently added</Text>
          <FlatList
            data={flashSaleItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
              onPress={() => router.push({pathname:'categories/productDetailsPage', params: { productId: item.id }})}
            >
              <View className="mr-4 border border-black p-3 rounded-lg h-45 w-45">
                <Image
                  source={{ uri: item.image }}
                  className="w-24 h-24 rounded-lg"
                />
                <Text className="mt-2 text-sm font-bold">{item.title}</Text>
                <View className="flex-row items-center">
                  <Text className="font-bold text-purple">{item.price}</Text>
                  <Text className="text-gray-400 line-through ml-2 text-sm">
                    {item.originalPrice}
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View className="px-2 mt-6">
          <Text className="font-bold text-lg">Nearby location</Text>
          <FlatList
            data={flashSaleItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
              onPress={() => router.push({pathname:'categories/productDetailsPage', params: { productId: item.id }})}
            >
              <View className="mr-4 border border-black p-3 rounded-lg h-45 w-45">
                <Image
                  source={{ uri: item.image }}
                  className="w-24 h-24 rounded-lg"
                />
                <Text className="mt-2 text-sm font-bold">{item.title}</Text>
                <View className="flex-row items-center">
                  <Text className="font-bold text-purple">{item.price}</Text>
                  <Text className="text-gray-400 line-through ml-2 text-sm">
                    {item.originalPrice}
                  </Text>
                </View>
              </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
