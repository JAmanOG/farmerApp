import { View, Text, FlatList } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Categories = () => {
    const params = useLocalSearchParams();
    console.log(params); // Check if 'category' is in the params
  
    const { category } = params;
    console.log("Categories", category); // Check if 'category' is in the params

    const parsedCategory = category ? JSON.parse(category) : null;
    console.log("ParsedCategories", parsedCategory); // Check if 'category' is in the params
    
  if (!category) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
    {/* Displaying the category title */}
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
      {parsedCategory.category}
    </Text>

    {/* FlatList to render products */}
    <FlatList
      data={parsedCategory.products}
      keyExtractor={(item, index) => item.name || index.toString()} // Key using item.name or index
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text> {/* Display product name */}
          <Text style={{ fontSize: 16, color: 'gray' }}>
            {`$${item.price.toFixed(2)}`} {/* Display formatted price */}
          </Text>
        </View>
      )}
    />
  </View>
  );
};

export default Categories;
