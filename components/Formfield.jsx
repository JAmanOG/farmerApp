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
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-black font-bold text-base">{title}</Text>
      <View className="w-full h-16 px-4 bg-white flex-row items-center rounded-lg shadow-md">
        <TextInput
          className="flex-1 text-black text-base"
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
    </View>
  );
};

export default FormField;
