import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-picker/picker';
import {Picker} from '@react-native-picker/picker';
import ModeContext from "../../context/Modecontext";
import { LinearGradient } from 'expo-linear-gradient';

export default function explore() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [region, setRegion] = useState('');
  const [availability, setAvailability] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { mode, toggleRole, isDisabled } = React.useContext(ModeContext);
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
      <View style={styles.section}>
        <Text style={styles.label}>Category</Text>
        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={(itemValue) => setCategory(itemValue)}>
          <Picker.Item label="Select a category" value="" />
          <Picker.Item label="Electronics" value="electronics" />
          <Picker.Item label="Clothing" value="clothing" />
          <Picker.Item label="Accessories" value="accessories" />
        </Picker>
      </View>

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
        <Text style={styles.label}>Product Image</Text>
        <View style={styles.imageRow}>
          <TouchableOpacity style={styles.addImageButton}
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
            <LinearGradient
              key={index}
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
