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
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import ModeContext from "../../context/Modecontext";
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { categories } from '../../constants';
import LocationContext from '../../context/LocationContext';
import { useRouter } from "expo-router";
import { indiaStatesAndDistricts } from '../../constants';
import { uploadImage,createForm } from '../../lib/appwrite';
import * as ImageManipulator from 'expo-image-manipulator';

export default function explore() {
  const {location} = React.useContext(LocationContext);
  const loc = location;
  const [loading, setLoading] = useState(false);
  const { mode } = React.useContext(ModeContext);
  const router = useRouter();
  const [productCat, setProductCat] = useState(null);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

const handleCategoriesSelect = async (category) => {
  console.log("Selected category:", category);
setLoading(true);
setError(null);
try {
  const data = fetchDataForCategory(category);
  console.log("Data:", data);
  if (data) {
    setProductCat(data);
  }

  setLoading(false);
  console.log("Productdetails:", productCat);
  router.push({
    pathname: 'categories/Productpage',
    params: { product: JSON.stringify(data) }
  });

} catch (error) {
  setError('Failed to load data'); // Set error if fetch fails
  setLoading(false); // Stop loading
}
  };

  const fetchDataForCategory = async(Category) => {
    // Fetch data for the selected category
    console.log("Fetching data for category:", Category);

    // Simulate fetching data from an API
 try {
     const data = categories.find((cat) => cat.name === Category);
 
     if (data) {
       console.log("Data found for category:", data);
     }
 
    return data;
   } catch (error) {
     console.error("Error fetching data for category:", error);
     setError("Error fetching data for category. Please try again later.");
   }
};
  

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
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],  // Limit to images
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        const selectedImage = result.assets[0];
        console.log("Image picked successfully:", selectedImage);
  
        let imageToStore = selectedImage;
  
        // If the image is in .jpeg format, convert it to .jpg
        if (selectedImage.uri && selectedImage.uri.endsWith('.jpeg')) {
          const manipResult = await ImageManipulator.manipulateAsync(
            selectedImage.uri,
            [],
            { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
          );
  
          // Update the image properties without changing the URI directly
          imageToStore = {
            ...selectedImage,
            uri: manipResult.uri,  // Update URI with converted image
            mimeType: 'image/jpeg',  // Ensure MIME type remains as JPEG
            fileName: selectedImage.fileName.replace('.jpeg', '.jpg'),  // Update file extension
          };
        }
  
        // Set the image object to the state or formData
        setImage(imageToStore);  // Save the manipulated image object to state
        console.log("Updated Image:", imageToStore);
  
        // If you need to update a form field with the image data
        handleChange('imageId', imageToStore);  // Update imageId in formData with the full image object
      } else {
        console.log("Image picking canceled");
      }
    } catch (error) {
      console.error("Error picking image:", error);
      Alert.alert("Error picking image", error.message);
    }
  };

  const loca = loc.formattedAddress === null ? 'Location not available' : loc.formattedAddress; 
  
  
  const [formData, setFormData] = useState({
    productname: '',
    description: '',
    price: '',
    quantityavailable: '',
    category: null,
    subcategory: null,
    product: null,
    address: loca,
    imageId: image,
    state: null,
    district: null,
    availability: false,
    validDate: new Date(),
    DateState: false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async() => {
    if (!formData.productname || !formData.price) {
      setError("Product name and price are required.");
      return;
    }
    try {
      //removing DateState from formData

        console.log("Form data:", formData);
      const product = await createForm(formData);
      console.log("Product created successfully:", product);

      // Reset the form
      setFormData({
        productname: '',
        description: '',
        price: '',
        quantityavailable: '',
        category: null,
        subcategory: null,
        product: null,
        address: loca,
        imageId: null,
        state: null,
        district: null,
        availability: false,
        validDate: new Date(),
        DateState: false,
      });
      setImage(null);
    }
    catch (error) {
      console.error("Error creating product:", error);
      setError("Error creating product. Please try again later.");
    }
    
    // Proceed with API submission or navigation
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
        value={formData.productname}
        onChangeText={(text) => handleChange('productname', text)}
      />
    </View>
  
    {/* Product Description */}
    <View style={styles.section}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter product description"
        value={formData.description}
        multiline
        onChangeText={(text) => handleChange('description', text)}
      />
    </View>
  
    {/* Category */}
{/* Category */}
<Text>Category:</Text>
<Picker
  selectedValue={formData.category}
  onValueChange={(value) => {
    handleChange('category', value);
    handleChange('subcategory', null); // Reset subcategory
    handleChange('product', null);    // Reset product
  }}
>
  <Picker.Item label="Select a category" value={null} />
  {categories.map((category) => (
    <Picker.Item key={category.name} label={category.name} value={category.name} />
  ))}
</Picker>

{/* Subcategory or Product */}
{formData.category && (
  <>
    {/* Check if subcategories exist */}
    {categories.find((cat) => cat.name === formData.category)?.subcategories ? (
      <>
        {/* Subcategory */}
        <Text>Subcategory:</Text>
        <Picker
          selectedValue={formData.subcategory}
          onValueChange={(value) => {
            handleChange('subcategory', value);
            handleChange('product', null); // Reset product
          }}
        >
          <Picker.Item label="Select a subcategory" value={null} />
          {categories
            .find((cat) => cat.name === formData.category)
            ?.subcategories.map((subcategory) => (
              <Picker.Item key={subcategory.name} label={subcategory.name} value={subcategory.name} />
            ))}
        </Picker>

        {/* Product */}
        {formData.subcategory && (
          <>
            <Text>Product:</Text>
            <Picker
              selectedValue={formData.product}
              onValueChange={(value) => handleChange('product', value)}
            >
              <Picker.Item label="Select a product" value={null} />
              {categories
                .find((cat) => cat.name === formData.category)
                ?.subcategories.find((sub) => sub.name === formData.subcategory)
                ?.products.map((product) => (
                  <Picker.Item key={product.name} label={product.name} value={product.name} />
                ))}
            </Picker>
          </>
        )}
      </>
    ) : (
      <>
        {/* Direct Product Selection */}
        <Text>Product:</Text>
        <Picker
          selectedValue={formData.product}
          onValueChange={(value) => handleChange('product', value)}
        >
          <Picker.Item label="Select a product" value={null} />
          {categories
            .find((cat) => cat.name === formData.category)
            ?.products.map((product) => (
              <Picker.Item key={product.name} label={product.name} value={product.name} />
            ))}
        </Picker>
      </>
    )}
  </>
)}

  
    {/* Price */}
    <View style={styles.section}>
      <Text style={styles.label}>Price (in Kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={formData.price}
        keyboardType="numeric"
        onChangeText={(text) => handleChange('price', text)}
      />
    </View>
  
    {/* Quantity Available */}
    <View style={styles.section}>
      <Text style={styles.label}>Quantity Available</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter quantity"
        value={formData.quantityavailable}
        keyboardType="numeric"
        onChangeText={(text) => handleChange('quantityavailable', text)}
      />
    </View>
    {
      image ? (
        <Image source={{ uri: image?.uri  }} style={styles.productImage} />
      ) : null
    }
  
    {/* Product Image */}
    <View style={styles.section}>
      <Text style={styles.label}>Product Image</Text>
      <View style={styles.imageRow}>
        <TouchableOpacity
          style={styles.addImageButton}
          onPress={pickImage}
        >
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>



    {/* Location/address */}
    <View style={styles.section}>
      <Text style={styles.label}>Address/landmark</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter address"
        value={formData.address}
        onChangeText={(text) => handleChange('address', text)}
      />
    </View>
  {/* State Selection */}
<View style={styles.section}>
  <Text style={styles.label}>State</Text>
  <Picker
    selectedValue={formData.state}
    onValueChange={(value) => {
      handleChange('state', value);
      handleChange('district', null);
    }}
  >
    <Picker.Item label="Select a state" value={null} />
    {Object.entries(indiaStatesAndDistricts).map(([state]) => (
      <Picker.Item key={state} label={state} value={state} />
    ))}
  </Picker>
</View>

{
formData.state && indiaStatesAndDistricts[formData.state]?.length > 0 && (
  <View style={styles.section}>
    <Text style={styles.label}>District</Text>
    <Picker
      selectedValue={formData.district}
      onValueChange={(value) => handleChange('district', value)}
    >
      <Picker.Item label="Select a district" value={null} />
      {indiaStatesAndDistricts[formData.state].map((district) => (
        <Picker.Item key={district} label={district} value={district} />
      ))}
    </Picker>
  </View>
)}

  
    {/* Product Availability */}
    <View style={styles.section}>
      <Text style={styles.label}>Availability Now</Text>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => handleChange('availability', !formData.availability)}
      >
        <Text style={styles.toggleText}>{formData.availability ? 'Available' : 'Not Available'}</Text>
      </TouchableOpacity>
    </View>
  
    {/* Select Date */}
    <View style={styles.section}>
      <Text style={styles.label}>LastDate to Buy</Text>
      <TouchableOpacity
        onPress={() => handleChange('DateState', true)}
        style={styles.datePickerButton}
      >
        <Text style={styles.datePickerText}>{formData.validDate.toDateString()}</Text>
      </TouchableOpacity>
      {formData.DateState && (
        <DateTimePicker
          value={formData.validDate}
          mode="date"
          display="default"
          onChange={(event, date) => {
            if (event.type === 'set' && date) {
              handleChange('validDate', date); // Set the selected date
            }
            handleChange('DateState', false); // Close the picker
          }}
        />
      )}
    </View>
  
    {/* Submit Button */}
    <TouchableOpacity
      style={styles.submitButton}
      onPress={handleSubmit}
    >
      <Text style={styles.submitButtonText}>Add Product</Text>
    </TouchableOpacity>
  </View>
  ):(
            <View className='mb-10'>

          <Text style={styles.title}>Explore 🚀</Text>
          <Text style={styles.subtitle}>
          </Text>
    
          {subjects.map((subject, index) => (

            <TouchableOpacity key={index}
            onPress={() => handleCategoriesSelect(subject.name)}
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
          {loading && <Text>Loading...</Text>}

{error && <Text style={{ color: 'red' }}>{error}</Text>}

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
