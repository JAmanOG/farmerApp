import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React from "react";

const CustomButton = ({
  handlePress,
  title,
  containerStyle = "",
  textStyles = "",
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className={`bg-purple text-white py-4 w-full px-6 rounded-lg 
        ${containerStyle} ${isLoading ? "opacity-50" : "hover:bg-goldyellowwarm"}`}
      disabled={isLoading}
      aria-label={title}
    >
      {/* Conditionally render a loading spinner */}
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text
          className={`text-white font-merriweatherbold  font-extrabold text-center ${textStyles}`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
