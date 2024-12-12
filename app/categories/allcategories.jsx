import { View, Text, FlatList, Image, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Categories = () => {
  const params = useLocalSearchParams();
  console.log("Params:", params); // Log the params to verify its structure

  const { category } = params;
  console.log("Category from params:", category); // Log the category

  let parsedCategory = null;

  try {
    parsedCategory = category ? JSON.parse(category) : null;
  } catch (error) {
    console.error("Error parsing category:", error); // Handle any parsing errors
  }

  console.log("Parsed Category:", parsedCategory); // Log the parsed category

  if (!parsedCategory || parsedCategory.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView className="px-4 mt-6" contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Loop through all categories and render their products */}
      {parsedCategory.map((categoryItem, index) => (
        <View key={index} className="mb-6">
          <Text className="font-bold text-2xl mb-3 text-gray-800">{categoryItem.category}</Text>
          <FlatList
            data={categoryItem.products}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="mr-4 mb-4 w-44 rounded-lg bg-white shadow-lg overflow-hidden">
                {/* Product Image with enhanced styling */}
                <Image
                  source={{ uri: item.image || 'https://via.placeholder.com/150' }} 
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <View className="px-3 py-2">
                  <Text className="text-lg font-semibold text-gray-900">{item.name}</Text>
                  <View className="flex-row items-center mt-2">
                    {/* Price with discount styling */}
                    <Text className="text-xl font-bold text-purple-600">${item.price.toFixed(2)}</Text>
                    {item.originalPrice && (
                      <Text className="ml-2 text-sm text-gray-400 line-through">${item.originalPrice.toFixed(2)}</Text>
                    )}
                  </View>
                  {/* Add a label for discount if available */}
                  {item.originalPrice && (
                    <View className="bg-purple text-white text-xs font-bold rounded-full px-2 py-1 mt-1">
                      Save {Math.round(100 - (item.price / item.originalPrice) * 100)}%
                    </View>
                  )}
                </View>
              </View>
            )}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;
