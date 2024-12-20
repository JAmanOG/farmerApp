// Signup Screen
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import FormField from "../../components/Formfield";
import CustomButton from "../../components/custombutton";
import { createUser } from "../../lib/appwrite";

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    if(!form.email || !form.password || !form.username) {
      Alert.alert("Error","Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const result = await createUser(form.email, form.password, form.username);

      router.replace("/home");
    } catch (error) {
      console.error("Error signing up", error);
      Alert.alert("Error", error.message);
    }finally {
      setIsLoading(false);
    }

  };

  return (
    <SafeAreaView className="bg-gray-100 h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="items-center w-full px-4 py-6">
          {/* Header Section */}
          <Text className="text-3xl font-bold mt-4 text-center font-merriweatherblack text-black">
            Create an account
          </Text>
          <Text className="text-center font-merriweatherblack text-base  font-bold text-black mt-4">
             New User ?{" "}
            <Link href="/sign-in" className="text-purple">
              Signup Now
            </Link>
          </Text>

          {/* Form Fields */}
          <FormField
            title="Username"
            value={form.username}
            onChange={(value) => handleChange("username", value)}
            placeholder="Username"
            // otherStyles="mt-7"
            keyboardType="username"
          />

          <FormField
            title="Email"
            value={form.email}
            onChange={(value) => handleChange("email", value)}
            placeholder="Email address"
            // otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            onChange={(value) => handleChange("password", value)}
            placeholder="Password"
            // otherStyles="mt-7"
            secureTextEntry={true}
          />

          <CustomButton
            title="Create an account"
            handlePress={handleSubmit}
            containerStyle="mt-7"
            isLoading={isLoading}
          />
          <Link href="/sign-in" className="mx-4 mt-4 text-sm  font-bold">
            Have an account already? {""}
            <Text className="text-purple">

            Login
            </Text>
          </Link>

          {/* Social Media Section */}
          <View className="flex items-center justify-center px-4 ">
            {/* Terms and Conditions */}
            <Text className="text-center text-gray-500 text-xs font-merriweatherblack mt-8 px-6 ">
              By clicking Create account you agree to Recognotes{" "}
              <Text className="text-purple font-merriweatherblack text-xs">
                Terms of use
              </Text>{" "}
              and{" "}
              <Text className="text-purple font-merriweatherblack text-xs">
                Privacy policy
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
