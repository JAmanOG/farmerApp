import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { getProductByName, getFilePreview } from "../../lib/appwrite"; // Ensure getFilePreview is imported
import { useRouter } from "expo-router";

const SingleProduct = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { subcat, procat } = params;

  console.log("subcat", subcat);

  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState({}); // To store image preview URLs

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = procat
          ? await getProductByName(procat)
          : await getProductByName(subcat);

        setProducts(fetchedProducts);

        // Fetch image previews for each product (if an image exists)
        const imagePromises = fetchedProducts.map(async (product) => {
          if (product.imageId) {
            const imageUrl = await getFilePreview(product.imageId,'image'); // Get image preview URL
            return { id: product.$id, imageUrl }; // Store the image URL with product ID
          }
          return null;
        });

        // Resolve all promises and update the state with the image URLs
        const imageResults = await Promise.all(imagePromises);
        const imageUrlMap = imageResults.reduce((acc, item) => {
          if (item) {
            acc[item.id] = item.imageUrl;
          }
          return acc;
        }, {});

        setImageUrls(imageUrlMap); // Save the URLs in the state
      } catch (error) {
        console.error("Failed to fetch products or images:", error);
      }
    };

    fetchProducts();
  }, [procat, subcat]);

  const handleProductPress = (productId) => {
    // Navigate to product details page
    router.push({
      pathname: "categories/productDetailsPage",
      params: { productId: JSON.stringify(productId) },
    });
  };
  const renderProductItem = ({ item }) => {
    // Ensure the URI is valid and is a string
    const productImageUrl = imageUrls[item.$id]?.href  || "https://via.placeholder.com/150"; // Fallback if no image URL
    
    return (
      <Card style={styles.card} onPress={() => handleProductPress(item.$id)}>
        <Card.Cover
          source={{ uri: productImageUrl }} // Ensure 'uri' is a string
          style={styles.productImage}
        />
        <Card.Content style={styles.cardContent}>
          <Title style={styles.productName}>{item.productname}</Title>
          <Paragraph style={styles.productDescription}>
            {item.description}
          </Paragraph>
          <Text style={styles.productPrice}>₹{item.price}</Text>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button mode="contained" style={styles.button}>
            View Details
          </Button>
        </Card.Actions>
      </Card>
    );
  };
  

  return (
    <>
      {products.length === 0 && <Text>No Product Available You can Add it</Text>}

      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.$id}
          renderItem={renderProductItem}
          contentContainerStyle={styles.list}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  productImage: {
    height: 200,
    borderRadius: 16,
  },
  cardContent: {
    padding: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4caf50",
  },
  cardActions: {
    padding: 16,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#6c56f2",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default SingleProduct;
