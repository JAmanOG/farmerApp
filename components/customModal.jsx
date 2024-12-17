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

const CustomModalForm = ({
  isVisible,
  onClose,
  onSave,
  title = "Edit Details",
  placeholder = "Type here...",
  saveButtonLabel = "Save Changes",
  cancelButtonLabel = "Cancel",
  initialValue = "",
}) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleSave = () => {
    if (inputValue.trim()) {
      onSave(inputValue);
      setInputValue("");
      onClose();
    }
  };

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
                <Image
                  source={{ uri: "https://via.placeholder.com/100" }}
                  style={styles.profileImage}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Update Name"
                  value={inputValue}
                  onChangeText={setInputValue}
                />
              </View>
            ) : initialValue.label === "Contact Info" ? (
              <TextInput
                style={styles.input}
                placeholder="Update Contact Info"
                value={inputValue}
                onChangeText={setInputValue}
              />
            ) : initialValue.label === "Wishlist" ? (
              <View>
                <Text style={styles.sectionTitle}>Your Wishlist</Text>
                <Ionicons name="trash" size={24} color="#42A5F5" />
              </View>
            ) : initialValue.label === "Logout button" ? (
              <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Logout Now</Text>
              </TouchableOpacity>
            ) : null}
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.footerText}>{saveButtonLabel}</Text>
            </TouchableOpacity>
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
  logoutButton: {
    backgroundColor: "#42A5F5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
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
