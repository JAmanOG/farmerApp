import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

const Search = ({
  title,
  value,
  placeholder,
  
  onChange,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    
      <View className="w-full h-16 px-4 bg-white flex-row items-center rounded-lg border border-purple shadow-md">
          
        <TextInput
          className="flex-1 text-black text-base"
          placeholder={placeholder}
          placeholderTextColor="#8f8593"
          value={value}
          onChangeText={onChange}
          secureTextEntry={props.keyboardType === "password" && !showPassword}
          {...props}
        />
<TouchableOpacity
            className="ml-2"
          >
      <Feather name="search" size={20} color="gray" />

          </TouchableOpacity>

      </View>
  );
};

export default Search;
