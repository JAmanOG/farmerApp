// SignIn Screen
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import FormField from "../../components/Formfield";
import CustomButton from "../../components/custombutton";
import { SignIn as SignInPage, } from "../../lib/appwrite";
const SocialButton = ({ uri, alt, handlePress }) => (
  <TouchableOpacity
    className="bg-white w-16 h-16 rounded-lg m-2 shadow-lg flex items-center justify-center"
    onPress={handlePress}
  >
    <Image source={{ uri }} className="w-8 h-8" accessibilityLabel={alt} />
  </TouchableOpacity>
);

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const result = await SignInPage(form.email, form.password);
      router.replace("/home");
    } catch (error) {
      console.error("Error signing in", error);
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <SafeAreaView className="bg-gray-100 h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="items-center w-full px-4 py-6">
          {/* Header Section */}
          <Text className="text-4xl font-bold mt-4 text-center font-merriweatherblack text-black">
            Create an account
          </Text>
          <Text className="text-center font-merriweatherblack text-base font-bold text-black mt-4">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-purple">
              Login
            </Link>
          </Text>

          {/* Form Fields */}
          <FormField
            title="Email"
            value={form.email}
            onChange={(value) => handleChange("email", value)}
            placeholder="Email address"
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            onChange={(value) => handleChange("password", value)}
            placeholder="Password"
            otherStyles="mt-7"
            secureTextEntry={true}
          />

          {/* Forget password */}
          <Link href="/forgot-password" className="text-purple font-bold left-32 pt-3 text-sm mt-2">
            Forgot password?
          </Link>

          <CustomButton
            title="Continue"
            handlePress={handleSubmit}
            containerStyle="mt-7"
            isLoading={isLoading}
          />

          {/* Social Media Section */}
          <View className="flex items-center justify-center px-4 mt-8">
            <View className="flex-row items-center w-full">
              <View className="flex-1 h-[1px] bg-gray-300"></View>
              <Text className="mx-4 text-purple text-sm font-bold">or sign in with</Text>
              <View className="flex-1 h-[1px] bg-gray-300"></View>
            </View>

            <View className="flex-row justify-center space-x-11 mt-6">
              <SocialButton
                uri="https://img.icons8.com/?size=100&id=mtfWz20b5AxB&format=png&color=000000"
                alt="Email"
                handlePress={() => router.push("/sign-up")}
              />
              <SocialButton
                uri="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="Google Logo"
              />
              <SocialButton
                uri="https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
                alt="Apple Logo"
              />
              <SocialButton
                uri="https://res.cloudinary.com/amancloudnairy/image/upload/v1733930712/clxoxy3jjhblmv9hmess.png"
                alt="Facebook Logo"
              />
            </View>

            {/* Terms and Conditions */}
            <Text className="text-center text-gray-500 text-xs font-merriweatherblack mt-8 px-6 ">
              By clicking Create account you agree to Recognotes{" "}
              <Text className="text-purple font-merriweatherblack text-xs">Terms of use</Text> and{" "}
              <Text className="text-purple font-merriweatherblack text-xs">Privacy policy</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;



// import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Link, router } from "expo-router";
// import FormField from "../../components/Formfield";
// import CustomButton from "../../components/custombutton";
// import { SignIn as SignInPage,clerkSignIn } from "../../lib/appwrite";

// const SocialButton = ({ uri, alt, handlePress }) => (
//   <TouchableOpacity
//     className="bg-white w-16 h-16 rounded-lg m-2 shadow-lg flex items-center justify-center"
//     onPress={handlePress}
//   >
//     <Image source={{ uri }} className="w-8 h-8" accessibilityLabel={alt} />
//   </TouchableOpacity>
// );


// const SignIn = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   const handleSubmit = async () => {
//     if (!form.email || !form.password) {
//       Alert.alert("Error", "Please fill in all fields");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const result = await SignInPage(form.email, form.password);
//       router.replace("/home");
//     } catch (error) {
//       console.error("Error signing in", error);
//       Alert.alert("Error", error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleAuth = async () => {
//     try {
//       setIsLoading(true);
//       await clerkSignIn();
//       router.replace("/home"); // Navigate to home if successful
//     } catch (error) {
//       console.error("Google OAuth failed", error);
//       Alert.alert("Error", error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView className="bg-gray-100 h-full">
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <View className="items-center w-full px-4 py-6">
//           {/* Header Section */}
//           <Text className="text-4xl font-bold mt-4 text-center font-merriweatherblack text-black">
//             Create an account
//           </Text>
//           <Text className="text-center font-merriweatherblack text-base font-bold text-black mt-4">
//             Already have an account?{" "}
//             <Link href="/sign-in" className="text-purple">
//               Login
//             </Link>
//           </Text>

//           {/* Form Fields */}
//           <FormField
//             title="Email"
//             value={form.email}
//             onChange={(value) => handleChange("email", value)}
//             placeholder="Email address"
//             otherStyles="mt-7"
//             keyboardType="email-address"
//           />

//           <FormField
//             title="Password"
//             value={form.password}
//             onChange={(value) => handleChange("password", value)}
//             placeholder="Password"
//             otherStyles="mt-7"
//             secureTextEntry={true}
//           />

//           {/* Forget password */}
//           <Link href="/forgot-password" className="text-purple font-bold left-32 pt-3 text-sm mt-2">
//             Forgot password?
//           </Link>

//           <CustomButton
//             title="Continue"
//             handlePress={handleSubmit}
//             containerStyle="mt-7"
//             isLoading={isLoading}
//           />

//           {/* Social Media Section */}
//           <View className="flex items-center justify-center px-4 mt-8">
//             <View className="flex-row items-center w-full">
//               <View className="flex-1 h-[1px] bg-gray-300"></View>
//               <Text className="mx-4 text-purple text-sm font-bold">or sign in with</Text>
//               <View className="flex-1 h-[1px] bg-gray-300"></View>
//             </View>

//             <View className="flex-row justify-center space-x-11 mt-6">
//               <SocialButton
//                 uri="https://img.icons8.com/?size=100&id=mtfWz20b5AxB&format=png&color=000000"
//                 alt="Email"
//                 handlePress={() => router.push("/sign-up")}
//               />
//               <SocialButton
//                 uri="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
//                 alt="Google Logo"
//                 handlePress={handleGoogleAuth} // Call Google OAuth
//               />
//               <SocialButton
//                 uri="https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
//                 alt="Apple Logo"
//               />
//               <SocialButton
//                 uri="https://res.cloudinary.com/amancloudnairy/image/upload/v1733930712/clxoxy3jjhblmv9hmess.png"
//                 alt="Facebook Logo"
//               />
//             </View>

//             {/* Terms and Conditions */}
//             <Text className="text-center text-gray-500 text-xs font-merriweatherblack mt-8 px-6 ">
//               By clicking Create account you agree to Recognotes{" "}
//               <Text className="text-purple font-merriweatherblack text-xs">Terms of use</Text> and{" "}
//               <Text className="text-purple font-merriweatherblack text-xs">Privacy policy</Text>
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SignIn;
