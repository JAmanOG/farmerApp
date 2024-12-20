import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const ProductPage = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { product } = params;

  const [activeFilters, setActiveFilters] = useState([]);
  let parsedProduct = null;

  if (typeof product === "string") {
    try {
      parsedProduct = JSON.parse(product);
    } catch (error) {
      console.error("Error parsing product:", error);
    }
  } else {
    parsedProduct = product;
  }

//   if (!parsedProduct || !parsedProduct._j || parsedProduct._j.subcategories.length === 0&&parsedProduct._j.products.length === 0) {
//     return (
//       <View style={styles.noProductContainer}>
//         <Text style={styles.noProductText}>No products available. Please try again later.</Text>
//       </View>
//     );
//   }
  console.log("Reaching here");
  let subcategories = "";
  let subProduct = "";
  subcategories = parsedProduct._j.subcategories;
  if (!subcategories) {
    subProduct = parsedProduct._j.products
}


const handleAddFilter = (filter) => {
    if (!Array.isArray(subcategories) || subcategories.length === 0) {
      return; // Exit if subcategories is not present
    }
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const handleRemoveFilter = (filter) => {
    if (!Array.isArray(subcategories) || subcategories.length === 0) {
      return; // Exit if subcategories is not present
    }
    setActiveFilters(activeFilters.filter((activeFilter) => activeFilter !== filter));
  };
  
  const filteredProducts = Array.isArray(subcategories) && subcategories.length > 0
    ? subcategories
        .filter((subcategory) =>
          activeFilters.length > 0
            ? activeFilters.includes(subcategory.name)
            : true
        )
        .flatMap((subcategory) => subcategory.products)
    : []; // Return an empty array if subcategories is not present
  
  return (
    <View style={styles.pageContainer}>
      {
        subcategories ? (
        <>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterChipsContainer} className=''>
        {subcategories.map((subcategory) => (
          <TouchableOpacity
            key={subcategory.name}
            style={
              activeFilters.includes(subcategory.name)
                ? styles.activeFilterChip
                : styles.filterChip
            }
            onPress={() =>
              activeFilters.includes(subcategory.name)
                ? handleRemoveFilter(subcategory.name)
                : handleAddFilter(subcategory.name)
            }
          >
            <Text style={styles.filterChipText}>{subcategory.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <View key={product._id} style={styles.productCard}>
                <Image
                  source={{
                    uri: product.image || "https://via.placeholder.com/150",
                  }}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>{product.name}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noProductText}>No products match your filters.</Text>
          )}
        </View>
      </ScrollView>
      </>):(
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {subProduct ? (
            subProduct.map((product) => (
              <TouchableOpacity key={product._id} onPress={() => 
                router.push({ 
                  pathname: "categories/singleProduct",
                  params: {procat: JSON.stringify(product.name)}}
                )

              }>
              <View key={product._id} style={styles.productCard}>
                <Image
                  source={{
                    uri: product.image || "https://via.placeholder.com/150",
                  }}
                  style={styles.productImage}
                  />
                <Text style={styles.productName}>{product?.name}</Text>
              </View>
                  </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noProductText}>No products match your filters.</Text>
          )}
        </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  filterChipsContainer: {
    padding: 8,
    backgroundColor: "#f1f3f5",
    maxHeight: 60, // Set a fixed maximum height for the filter bar
    flexGrow: 0, // Prevent it from expanding unnecessarily
  },
  
  filterChip: {
    backgroundColor: "#e9ecef",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    height: 40,
    marginRight: 8,
  },
  activeFilterChip: {
    backgroundColor: "#74c0fc",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    height: 40,

    marginRight: 8,
  },
  filterChipText: {
    color: "#212529",
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#495057",
  },
  noProductContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  noProductText: {
    fontSize: 18,
    color: "#868e96",
  },
});

export default ProductPage;
