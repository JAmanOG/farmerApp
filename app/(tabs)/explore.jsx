import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-picker/picker';
import {Picker} from '@react-native-picker/picker';
import ModeContext from "../../context/Modecontext";
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { categories } from '../../constants';
import LocationContext from '../../context/LocationContext';

export default function explore() {
  const {location} = React.useContext(LocationContext);
  const loc = location;
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [region, setRegion] = useState(loc.formattedAddress || '');
  const [availability, setAvailability] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { mode, toggleRole, isDisabled } = React.useContext(ModeContext);

  // States for managing selected options and new product addition
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProductName, setNewProductName] = useState("");

  // const handleAddProduct = () => {
  //   if (selectedCategory && selectedSubcategory && newProductName) {
  //     // Find the selected category
  //     const category = categories.find(cat => cat.name === selectedCategory);

  //     // Ensure subcategories exist before accessing
  //     if (category && category.subcategories) {
  //       const subcategory = category.subcategories.find(sub => sub.name === selectedSubcategory);

  //       // Add the new product to the selected subcategory
  //       if (subcategory) {
  //         subcategory.products.push({ name: newProductName });
  //         setNewProductName("");
  //         alert("Product added successfully!");
  //       } else {
  //         alert("Subcategory not found!");
  //       }
  //     } else {
  //       alert("Category not found or has no subcategories!");
  //     }
  //   } else {
  //     alert("Please select a category, subcategory, and enter a product name.");
  //   }
  // };


  const subjects = [
    { name: 'Crops', colors: ['#FF5F6D', '#FFC371'], image: { uri: "https://via.placeholder.com/100" } },
    { name: 'Vegetables', colors: ['#11998e', '#38ef7d'], image: { uri: "https://via.placeholder.com/100" } },
    { name: 'Fruits', colors: ['#f12711', '#f5af19'], image: { uri: "https://via.placeholder.com/100" } },
    { name: 'Dairy Products', colors: ['#36D1DC', '#5B86E5'], image: { uri: "https://via.placeholder.com/100" } },
    { name: 'Spices', colors: ['#FF416C', '#FF4B2B'], image: { uri: "https://via.placeholder.com/100" } },
    { name: 'Flowers', colors: ['#833ab4', '#fd1d1d', '#fcb045'], image: { uri: "https://via.placeholder.com/100" } },
    { name: 'Herbs and Medicinal Plants', colors: ['#56ab2f', '#a8e063'], image: { uri: "https://via.placeholder.com/100" } },
    { name: 'Seeds and Saplings', colors: ['#3a7bd5', '#3a6073'], image: { uri: "https://via.placeholder.com/100" } },
    { name: 'Processed Foods', colors: ['#12c2e9', '#c471ed', '#f64f59'], image: { uri: "https://via.placeholder.com/100" } },
    { name: 'Fertilizers and Pesticides', colors: ['#0F2027', '#203A43', '#2C5364'], image: { uri: "https://via.placeholder.com/100" } },
  ];
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
  };


  return (
    <>
          <ScrollView style={styles.containers}>

    {mode == 'farmer'?(
    <View>
      <Text style={styles.header}>Add Product</Text>
      <Text style={styles.subHeader}>Add your product for your customers</Text>

      {/* Product Name */}
      <View style={styles.section}>
        <Text style={styles.label}>Product Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter product name"
          value={productName}
          onChangeText={setProductName}
        />
      </View>

      {/* Product Description */}
      <View style={styles.section}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter product description"
          value={description}
          multiline
          onChangeText={setDescription}
        />
      </View>

      {/* Product Category */}
      {/* <View style={styles.section}>
        <Text style={styles.label}>Category</Text>
        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={(itemValue) => setCategory(itemValue)}>
          <Picker.Item label="Select a category" value="" />
          <Picker.Item label="Crops" value="crops" />
          <Picker.Item label="Fruits" value="fruits" />
          <Picker.Item label="Dairy Products" value="dairy_products" />
          <Picker.Item label="Spices" value="spices" />
          <Picker.Item label="Flowers" value="flowers" />
          <Picker.Item label="Herbs and Medicinal Plants" value="Herbs_medicinal_plants" />
          <Picker.Item label="Seeds and Saplings" value="seeds_and_saplings" />
          <Picker.Item label="Processed Foods" value="Processed_and_foods" />
          <Picker.Item label="Fertilizers and Pesticides" value="fertilizers_and_perticides" />
        </Picker>
      </View>
 */}

<Text>Category:</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(value) => {
          setSelectedCategory(value);
          setSelectedSubcategory(null); // Reset subcategory when category changes
          setSelectedProduct(null); // Reset product when category changes
        }}>
        <Picker.Item label="Select a category" value={null} />
        {categories.map((category) => (
          <Picker.Item key={category.name} label={category.name} value={category.name} />
        ))}
      </Picker>

      {/* Dropdown for selecting a subcategory */}
      {selectedCategory && categories.find(cat => cat.name === selectedCategory)?.subcategories && (
        <>
          <Text>Subcategory:</Text>
          <Picker
            selectedValue={selectedSubcategory}
            onValueChange={(value) => {
              setSelectedSubcategory(value);
              setSelectedProduct(null); // Reset product when subcategory changes
            }}>
            <Picker.Item label="Select a subcategory" value={null} />
            {categories
              .find((cat) => cat.name === selectedCategory)
              ?.subcategories?.map((subcategory) => (
                <Picker.Item key={subcategory.name} label={subcategory.name} value={subcategory.name} />
              ))}
          </Picker>
        </>
      )}

      {/* Dropdown for selecting a product */}
      {selectedSubcategory && categories.find(cat => cat.name === selectedCategory)?.subcategories.find(sub => sub.name === selectedSubcategory)?.products && (
        <>
          <Text>Product:</Text>
          <Picker selectedValue={selectedProduct} onValueChange={setSelectedProduct}>
            <Picker.Item label="Select a product" value={null} />
            {categories // Find the selected category
              .find((cat) => cat.name === selectedCategory)
              ?.subcategories // Find the selected subcategory
              .find((sub) => sub.name === selectedSubcategory)
              ?.products.map((product) => (
                <Picker.Item key={product.name} label={product.name} value={product.name} />
              ))}
          </Picker>
        </>
      )}
      {/* if subcategory not exist then also show product */}
      {selectedCategory && !categories.find(cat => cat.name === selectedCategory)?.subcategories && (
        <>
          <Text>Product:</Text>
          <Picker selectedValue={selectedProduct} onValueChange={setSelectedProduct}>
            <Picker.Item label="Select a product" value={null} />
            {categories // Find the selected category
              .find((cat) => cat.name === selectedCategory)
              ?.products.map((product) => (
                <Picker.Item key={product.name} label={product.name} value={product.name} />
              ))}
          </Picker>
        </>
      )}

      {/* {selectedSubcategory && (
        <>
          <Text>New Product Name:</Text>
          <TextInput
            value={newProductName}
            onChangeText={(text) => setNewProductName(text)}
            placeholder="Enter product name"
            style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginVertical: 10 }}
          />

          <Button title="Add Product" onPress={handleAddProduct} />
        </>
      )} */}

      {/* Price */}
      <View style={styles.section}>
        <Text style={styles.label}>Price (in Rp)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter price"
          value={price}
          keyboardType="numeric"
          onChangeText={setPrice}
        />
      </View>

      {/* Quantity Available */}
      <View style={styles.section}>
        <Text style={styles.label}>Quantity Available</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter quantity"
          value={quantity}
          keyboardType="numeric"
          onChangeText={setQuantity}
        />
      </View>

      {/* Product Image */}
      <View style={styles.section}>
        <Text style={styles.label}>Product Image or Video</Text>
        <View style={styles.imageRow}>
          <TouchableOpacity style={styles.addImageButton}
          onPress={pickImage}
          >
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Location/Region */}
      <View style={styles.section}>
        <Text style={styles.label}>Location/Region</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter region"
          value={region}
          onChangeText={setRegion}
        />
      </View>

      {/* Product Availability */}
      <View style={styles.section}>
        <Text style={styles.label}>Availability</Text>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setAvailability(!availability)}>
          <Text style={styles.toggleText}>{availability ? 'Available' : 'Not Available'}</Text>
        </TouchableOpacity>
      </View>

      {/* Select Date */}
      <View style={styles.section}>
        <Text style={styles.label}>Product Date</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
          <Text style={styles.datePickerText}>{selectedDate.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowDatePicker(false);
              if (date) setSelectedDate(date);
            }}
          />
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Add Product</Text>
      </TouchableOpacity>
    </View>):(
            <View className='mb-10'>

          {/* Header */}
          <Text style={styles.title}>Explore 🚀</Text>
          <Text style={styles.subtitle}>
            Never trust anyone who has not brought a book with them.
          </Text>
    
          {/* Subject Cards */}
          {subjects.map((subject, index) => (
            <TouchableOpacity key={index}
          
            >
            <LinearGradient
              colors={subject.colors}
              style={styles.card}
              >
              <View style={styles.content}>
                <Text style={styles.subjectTitle}>{subject.name}</Text>
                <Text style={styles.subjectTagline}>
                  Study nature, love nature, stay close to nature
                </Text>
              </View>
              <Image source={subject.image} style={styles.image} />
            </LinearGradient>
              </TouchableOpacity>
            
          ))}
            </View>
    )}
        </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 15,
    padding: 20,
    height: 130,
  },
  content: {
    flex: 1,
  },
  subjectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subjectTagline: {
    fontSize: 12,
    color: '#FFF',
    marginTop: 5,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  picker: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  addImageButton: {
    width: 100,
    height: 100,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  toggleText: {
    color: 'white',
    fontSize: 16,
  },
  datePickerButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  datePickerText: {
    fontSize: 14,
  },
  submitButton: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 26,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
