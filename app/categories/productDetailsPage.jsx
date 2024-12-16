import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { Linking } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useLocalSearchParams } from "expo-router";

const productDetailsPage = ({ data }) => {
  const params = useLocalSearchParams();
  const { productId } = params;
  const parsedCategory = productId ? JSON.parse(productId) : null;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      const productData = {
        1: {
          name: "Product 1",
          description: "This is product 1.",
          price: 20,
          image: "https://via.placeholder.com/150",
          category: "Fruits",
          quantity: 10,
          region: "Nairobi",
          availability: true,
          productDate: "2022-12-12",
          phone: "0712345678",
        },
        2: {
          name: "Product 2",
          description: "This is product 2.",
          price: 30,
          image: "https://via.placeholder.com/150",
          category: "Vegetables",
          quantity: 20,
          region: "Mombasa",
          availability: false,
          productDate: "2022-12-12",
          phone: "0712345678",
        },
        3: {
          name: "Product 3",
          description: "This is product 3.",
          price: 40,
          image: "https://via.placeholder.com/150",
          category: "Dairy",
          quantity: 30,
          region: "Nakuru",
          availability: true,
          productDate: "2022-12-12",
          phone: "0712345678",
        },
      };

      setProduct(productData[parsedCategory]);
    };

    fetchProductData();
  }, [parsedCategory]);

  const handleCallNow = () => {
    const phoneNumber = `tel:${product.phone}`;
    Linking.openURL(phoneNumber).catch((err) =>
      console.error("Failed to make a call:", err)
    );
  };

  if (!product) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: product.image }} style={styles.image} />
        <Card.Content style={styles.cardContent}>
          <Title style={styles.title}>{product.name}</Title>
          <Paragraph style={styles.paragraph}>{product.description}</Paragraph>
        </Card.Content>
        <Card.Content style={styles.detailsContainer}>
          <Text style={styles.detailText}>Price: ${product.price}</Text>
          <Text style={styles.detailText}>Category: {product.category}</Text>
          <Text style={styles.detailText}>Quantity: {product.quantity}</Text>
          <Text style={styles.detailText}>Location: {product.region}</Text>
          <Text style={styles.detailText}>
            Availability: {product.availability ? "Available" : "Not Available"}
          </Text>
          <Text style={styles.detailText}>Product Date: {product.productDate}</Text>
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

export default productDetailsPage;