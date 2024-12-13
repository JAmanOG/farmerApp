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

  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
