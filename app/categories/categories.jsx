import React from "react";
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Appbar, Card, Button } from "react-native-paper";

const Categories = () => {
  const params = useLocalSearchParams();
  const { category } = params;

  const parsedCategory = category ? JSON.parse(category) : null;
  console.log("Parsed Category:", parsedCategory);

  if (!parsedCategory) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <Text className="text-lg text-gray-500">Loading...</Text>
      </View>
    );
  }

  if (
    (!parsedCategory.products || parsedCategory.products.length === 0) &&
    (!parsedCategory.subcategories || parsedCategory.subcategories.length === 0)
  ) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100 px-4">
        <Text className="text-2xl font-bold text-gray-700 mb-4">
          {parsedCategory.category}
        </Text>
        <Text className="text-gray-500 text-lg">
          No products or subcategories available in this category.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Categories" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      {/* Category List */}
      <FlatList
        data={parsedCategory.products || parsedCategory.subcategories}
        keyExtractor={(item, index) => item.name || index.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) =>
          item.products ? (
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryTitle}>{item.name}</Text>
              <FlatList
                data={item.products}
                horizontal
                keyExtractor={(subItem, subIndex) =>
                  subItem.name || subIndex.toString()
                }
                renderItem={({ item: subProduct }) => (
                  <Card style={styles.productCard}>
                    <Card.Cover
                      source={{
                        uri: subProduct.image || "https://via.placeholder.com/150",
                      }}
                      style={styles.productImage}
                    />
                    <Card.Content>
                      <Text style={styles.productName}>{subProduct.name}</Text>
                    </Card.Content>
                  </Card>
                )}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          ) : (
            <Card style={styles.itemCard}>
              <View style={styles.itemContent}>
                <Image
                  source={{
                    uri: item.image || "https://via.placeholder.com/150",
                  }}
                  style={styles.itemImage}
                />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                </View>
                <Button
                  mode="contained"
                  style={styles.viewButton}
                  onPress={() => {}}
                >
                  View
                </Button>
              </View>
            </Card>
          )
        }
      />

      {/* Pagination (Optional) */}
      {/* <View style={styles.paginationContainer}>
        <Button mode="contained" style={styles.loadMoreButton}>
          Load More
        </Button>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#6200ee",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  listContainer: {
    paddingBottom: 24,
  },
  categoryContainer: {
    padding: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  productCard: {
    marginRight: 12,
    borderRadius: 8,
    overflow: "hidden",
    width: 150,
  },
  productImage: {
    height: 120,
    resizeMode: "cover",
  },
  productName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  itemCard: {
    margin: 12,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#ffffff",
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  viewButton: {
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignSelf: "center",
  },
  paginationContainer: {
    padding: 16,
    alignItems: "center",
  },
  loadMoreButton: {
    backgroundColor: "#6200ee",
  },
});
export default Categories;
