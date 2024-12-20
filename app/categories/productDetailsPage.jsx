  import React, { useState, useEffect } from "react";
  import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
  import { Button, Card, Title, Paragraph } from "react-native-paper";
  import { Linking } from "react-native";
  import FontAwesome from '@expo/vector-icons/FontAwesome';
  import { useLocalSearchParams } from "expo-router";
  import { getProductsById, getFilePreview } from '../../lib/appwrite';

  const ProductDetailsPage = () => {
    const params = useLocalSearchParams();
    const { productId } = params;
    console.log("Product ID:", productId);
    const parsedCategory = productId ? JSON.parse(productId) : null;
    console.log("Parsed Category:", parsedCategory);
    const [product, setProduct] = useState(null);
    const [image, setImage] = useState(null);
    const handleDate = (date) => {
      if (date instanceof Date) {
        return date.toLocaleDateString(); // Format Date object
      } else if (typeof date === "string") {
        return new Date(date).toLocaleDateString(); // Convert string to Date, then format
      }
      return "Invalid date";
    };
    
    const productTempData = [
      {
        id: 1,
        productName: "Millets (Bajra)",
        description: "High-quality Bajra for a healthy diet",
        price: "5440",
        quantityAvailable: "1000",
        category: "Crops",
        subcategory: "Grains",
        product: "Millets (Bajra)",
        address: "Location1",
        imageId: "image_id_1",
        state: "State1",
        district: "District1",
        availability: true,
        validDate: new Date(),
        dateState: false,
        originalPrice: "5655.00",
        image: "https://link-to-image.com/iphone.png",
      },
      {
        id: 2,
        productName: "Lentils",
        description: "Premium quality lentils for daily use",
        price: "1500",
        quantityAvailable: "500",
        category: "Crops",
        subcategory: "Pulses",
        product: "Lentils",
        address: "Location2",
        imageId: "image_id_2",
        state: "State2",
        district: "District2",
        availability: true,
        validDate: new Date(),
        dateState: false,
        originalPrice: "1800.00",
        image: "https://link-to-image.com/iphone.png",
      },
      {
        id: 3,
        productName: "Potatoes",
        description: "Fresh potatoes sourced directly from farms",
        price: "300",
        quantityAvailable: "2000",
        category: "Vegetables",
        subcategory: "Common Vegetables",
        product: "Potatoes",
        address: "Location3",
        imageId: "image_id_3",
        state: "State3",
        district: "District3",
        availability: true,
        validDate: new Date(),
        dateState: false,
        originalPrice: "350.00",
        image: "https://link-to-image.com/iphone.png",
      },
      {
        id: 4,
        productName: "Mango",
        description: "Juicy mangoes from tropical regions",
        price: "800",
        quantityAvailable: "1500",
        category: "Fruits",
        subcategory: "Tropical Fruits",
        product: "Mango",
        address: "Location4",
        imageId: "image_id_4",
        state: "State4",
        district: "District4",
        availability: true,
        validDate: new Date(),
        dateState: false,
        originalPrice: "950.00",
        image: "https://link-to-image.com/iphone.png",
      },
      {
        id: 5,
        productName: "Organic Vegetables",
        description: "Fresh organic vegetables directly from farms",
        price: "1200",
        quantityAvailable: "800",
        category: "Organic Products",
        subcategory: null,
        product: "Organic Vegetables",
        address: "Location5",
        imageId: "image_id_5",
        state: "State5",
        district: "District5",
        availability: true,
        validDate: new Date(),
        dateState: false,
        originalPrice: "1500.00",
        image: "https://link-to-image.com/iphone.png",
      }
    ];
    useEffect(() => {
      const fetchProductData = async () => {
          try {
              // Search in productTempData first
              const tempProduct = productTempData.find((item) => item.id === parseInt(parsedCategory, 10));
              if (tempProduct) {
                  console.log("Product found in temp data:", tempProduct);
                  setProduct(tempProduct);
              } else {
                  console.log("Product not found in temp data. Fetching from database...");
                  const productData = await getProductsById(parsedCategory); // Assuming `parsedCategory` is the correct ID
                  console.log("Product fetched from database:", productData);
                  setProduct(productData);
              }
          } catch (error) {
              console.error("Error fetching product data:", error);
              Alert.alert("Error", "Failed to fetch product data.");
          }
      };
  
      fetchProductData();
  }, [parsedCategory]);
  

    useEffect(() => {
      const fetchImagePreview = async () => {
        if (product && product.imageId) {
          const imageUrl = await getFilePreview(product.imageId, 'image'); // Get image preview URL
          setImage(imageUrl);
        }
      };

      if (product) {
        fetchImagePreview();
      }
    }, [product]); // Runs whenever the product changes

    const handleCallNow = () => {
      const phoneNumber = `tel:${product.phone}`; // Ensure the `phone` field exists in your product data
      Linking.openURL(phoneNumber).catch((err) =>
        console.error("Failed to make a call:", err)
      );
    };

    if (!product) {
      return <Text style={styles.loadingText}>Loading...</Text>;
    }

    const productImageUrl = image?.href || "https://via.placeholder.com/150"; // Fallback if no image URL
    console.log("Product Image URL:", productImageUrl);

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: productImageUrl }} style={styles.image} />
          <Card.Content style={styles.cardContent}>
            <Title style={styles.title}>{product.productName}</Title>
            <Paragraph style={styles.paragraph}>{product.description}</Paragraph>
          </Card.Content>
          <Card.Content style={styles.detailsContainer}>
            <Text style={styles.detailText}>Price: ${product.price}</Text>
            <Text style={styles.detailText}>Category: {product.category}</Text>
            <Text style={styles.detailText}>Quantity: {product.quantityAvailable}</Text>
            <Text style={styles.detailText}>Location: {product.address}</Text>
            <Text style={styles.detailText}>
              Availability: {product.availability ? "Available" : "Not Available"}
            </Text>
            <Text style={styles.detailText}>Product Date: {handleDate(product.validDate)}</Text>

          </Card.Content>
          <Card.Actions style={styles.actionsContainer}>
            <Button
              mode="contained"
              onPress={() => {}}
              icon={() => <FontAwesome style={styles.icon} name="bell-o" size={20} color="white" />}
              style={[styles.button, styles.interestedButton]}
            >
              Interested
            </Button>
            <Button
              mode="contained"
              onPress={handleCallNow}
              icon="phone"
              style={[styles.button, styles.callButton]}
            >
              Call Now
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: "#f5f5f5",
      padding: 16,
      justifyContent: "center",
    },
    card: {
      borderRadius: 16,
      backgroundColor: "#ffffff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 5,
      overflow: "hidden",
    },
    image: {
      height: 250,
    },
    cardContent: {
      padding: 16,
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 8,
    },
    paragraph: {
      fontSize: 16,
      color: "#666",
      marginBottom: 16,
    },
    detailsContainer: {
      padding: 16,
      borderTopWidth: 1,
      borderColor: "#eee",
    },
    detailText: {
      fontSize: 16,
      color: "#555",
      marginBottom: 8,
    },
    actionsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 16,
    },
    button: {
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 8,
    },
    interestedButton: {
      backgroundColor: "#4caf50",
    },
    callButton: {
      backgroundColor: "#6c56f2",
    },
    loadingText: {
      flex: 1,
      textAlign: "center",
      fontSize: 18,
      color: "#555",
      marginTop: 20,
    },
    icon: {
      marginLeft: 8,
      width: 20,
    },
  });

  export default ProductDetailsPage;
