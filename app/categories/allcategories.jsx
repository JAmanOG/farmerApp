import { View, Text, FlatList, Image, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Categories = () => {
  // Fetch search params
  const params = useLocalSearchParams();
  console.log("Params:", params); // Log the params for debugging

  const { category } = params;

  let parsedCategory = null;

  try {
    parsedCategory = category ? JSON.parse(category) : null;
  } catch (error) {
    console.error("Error parsing category:", error); // Log any parsing errors
  }

  if (parsedCategory) {
    console.log("Parsed Category:", JSON.stringify(parsedCategory, null, 2));
  } else {
    console.log("Parsed Category is null or empty.");
  }

  if (!parsedCategory || parsedCategory.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No categories available. Please try again later.</Text>
      </View>
    );
  }

  const renderProductItem = ({ item }) => (
    <View className="mr-4 mb-4 w-44 rounded-lg bg-white shadow-lg overflow-hidden">
      <Image
        source={{ uri: item.image || "https://via.placeholder.com/150" }}
        className="w-full h-36 object-cover rounded-t-lg"
      />
      <View className="px-3 py-2">
        <Text className="text-lg font-semibold text-gray-900">{item.name}</Text>
      </View>
    </View>
  );

  const renderSubcategory = (subcategory, subIndex) => (
    <View key={subIndex} className="mb-4">
      <Text className="font-semibold text-xl mb-2 text-gray-700">{subcategory.name}</Text>
      <FlatList
        data={subcategory.products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `product-${subIndex}-${index}`}
        renderItem={renderProductItem}
      />
    </View>
  );

  const renderCategory = (categoryItem, index) => (
    <View key={index} className="mb-6">
      <Text className="font-bold text-2xl mb-3 text-gray-800">{categoryItem.name}</Text>

      {categoryItem.subcategories ? (
        categoryItem.subcategories.map(renderSubcategory)
      ) : (
        <FlatList
          data={categoryItem.products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `product-${index}`}
          renderItem={renderProductItem}
        />
      )}
    </View>
  );

  return (
    <ScrollView className="px-4 mt-6" contentContainerStyle={{ paddingBottom: 20 }}>
      {parsedCategory.map(renderCategory)}
    </ScrollView>
  );
};

export default Categories;
