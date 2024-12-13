import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";

const Categories = () => {
  const params = useLocalSearchParams();
  const { category } = params;

  // Parse the category data from params
  const parsedCategory = category ? JSON.parse(category) : null;

  // Show a loading state if category data is missing
  if (!parsedCategory) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-lg text-gray-500">Loading...</Text>
      </View>
    );
  }

  // Handle cases where no products exist
  if (!parsedCategory.products || parsedCategory.products.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100 px-4">
        <Text className="text-2xl font-bold text-gray-700 mb-4">
          {parsedCategory.category}
        </Text>
        <Text className="text-gray-500 text-lg">
          No products available in this category.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50 bg-[#eff2ef]">
      {/* Header Section */}
      <View className="sticky top-0 bg-gradient-to-r from-purple-500 to-blue-500 p-4 shadow-md">
        <Text className="text-xl font-bold text-purple">{parsedCategory.category}</Text>
      </View>

      {/* Product List */}
      <FlatList
        data={parsedCategory.products}
        keyExtractor={(item, index) => item.name || index.toString()}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row items-center bg-[#f7f7ff] rounded-xl shadow-lg mx-4 my-2 p-4 border border-gray-200 transition-transform transform hover:scale-105"
          >
            {/* Product Image */}
            <Image
              source={{
                uri: item.image || "https://via.placeholder.com/150",
              }}
              className="w-24 h-24 rounded-xl mr-4"
            />
            {/* Product Details */}
            <View className="flex-1">
              <Text className="text-lg font-bold ">
                {item.name}
              </Text>
              <Text className="text-base text-purple font-medium mt-1">
                ${item.price.toFixed(2)}
              </Text>
            </View>
            {/* Call-to-Action */}
            <TouchableOpacity className="bg-purple-600 px-4 py-2 rounded-lg">
              <Text className="text-purple text-sm font-medium">View</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      {/* Load More or Pagination */}
      <View className="py-4 px-4">
        <TouchableOpacity className="bg-purple-600 py-3 rounded-lg">
          <Text className="text-purple text-center font-semibold">Load More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Categories;
