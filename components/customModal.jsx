import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { signOut,addContact,updateUser } from "../lib/appwrite";
import { useRouter } from "expo-router";
import {useGlobalContext} from "../context/GlobalProvider";


const CustomModalForm = ({
  isVisible,
  onClose,
  onSave,
  title = "Edit Details",
  placeholder = "Type here...",
  saveButtonLabel = "Save Changes",
  cancelButtonLabel = "Cancel",
  initialValue = {},
  onLogout, // New prop for handling logout
}) => {
  const [inputValue, setInputValue] = useState(initialValue?.label || "");
  const router = useRouter();
  const { user } = useGlobalContext();

  const handleSave = async () => {
    if (inputValue.trim()) {
      // If the initialValue.label is "Contact Info", update the contact info
      if (initialValue.label === "Contact Info") {
        try {
          // Call the function to update user contact info
          console.log("Contact Info:", inputValue);
          
          await addContact(inputValue); // Assuming updateUser handles the contact info
          console.log("Contact Info Updated:", inputValue);
          onSave(inputValue); // Pass updated value to onSave
        } catch (error) {
          console.error("Failed to update contact info:", error);
        }
      } else if (initialValue.label === "Profile Picture & Name") {
        try {
          // Call the function to update user contact info
          console.log("Contact Info:", inputValue);
          
          await updateUser(inputValue); // Assuming updateUser handles the contact info
          console.log("Contact Info Updated:", inputValue);
          onSave(inputValue); // Pass updated value to onSave
        } catch (error) {
          console.error("Failed to update contact info:", error);
        }
      }

      setInputValue(""); // Clear input after saving
      onClose(); // Close the modal
      setInputValue(""); // Clear input after saving
    }
  };


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    await updateUser(inputValue, result);
    console.log(result);
  };

  const handleLogout = async () => {
    if (onLogout) {
      await signOut();
      onLogout();
      router.replace("(auth)/sign-in");
    } else {
      console.log("Logout callback not provided");
    }
    onClose();
  };

  const updateContact = async () => {
    await addContact(inputValue);
    console.log("Contact added successfully");
  } 
  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={28} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={styles.content}>
            {initialValue.label === "Profile Picture & Name" ? (
              <View style={styles.profileSection}>
                <TouchableOpacity onPress={pickImage}>
                  <Image
                    source={{ uri: `${user.avator}}` }}
                    style={styles.profileImage}
                  />
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  placeholder="Update Name"
                  value={inputValue}
                  onChangeText={setInputValue}
                />
              </View>
            ) : initialValue.label === "Contact Info" ? (
              <View style={styles.contactSection}>
                <TextInput
                  style={styles.input}
                  placeholder="Update Contact Info"
                  value={inputValue}
                  onChangeText={setInputValue}
                  keyboardType="phone-pad" // Ensure it's a phone number input
                />
              </View>
            ) : initialValue.label === "Wishlist" ? (
              <View>
                <Text style={styles.sectionTitle}>Your Wishlist</Text>
                <Ionicons name="trash" size={24} color="#42A5F5" />
              </View>
            ) : initialValue.label === "Logout button" ? (
              <View>
                <Text style={styles.logoutText}>
                  Are you sure you want to logout?
                </Text>
              </View>
            ) : null}
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            {initialValue.label === "Logout button" ? (
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleLogout}
              >
                <Text style={styles.footerText}>Confirm Logout</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.footerText}>{saveButtonLabel}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.footerText}>{cancelButtonLabel}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    height: "70%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 10,
  },
  header: {
    backgroundColor: "#6c56f2",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  closeButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#6c56f2",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f4f4f4",
    padding: 15,
  },
  saveButton: {
    backgroundColor: "#6c56f2",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#42A5F5",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CustomModalForm;
