import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const FormField = ({
  title,
  value,
  placeholder,
  
  onChange,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
      <View className="w-full h-16 px-4 bg-white flex-row items-center mt-3 rounded-lg shadow-md">
        <TextInput
          className={` flex-1 text-black bg-slate-50 text-base ${otherStyles}`}
          placeholder={placeholder}
          placeholderTextColor="#8f8593"
          value={value}
          onChangeText={onChange}
          secureTextEntry={props.keyboardType === "password" && !showPassword}
          {...props}
        />

        {props.keyboardType === "password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="ml-2"
          >
            <Text className="text-purple font-bold">
              {showPassword ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
  );
};

export default FormField;
