import { ScrollView, StatusBar, Text, View } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/custombutton";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function Index() {
  const { isloggedIn, loading } = useGlobalContext();

  // Handle navigation after component mounts
  useEffect(() => {
    if (!loading && isloggedIn) {
      router.replace("/home");
    }
  }, [isloggedIn, loading]);

  // Show loading or content
  if (loading) {
    return (
      <SafeAreaView className="bg-gray-100 flex-1 h-full">
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (

    <SafeAreaView className="bg-gray-100 flex-1 h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          className="flex-1 items-center justify-center px-6 min-h-[85vh]"
        >
          {/* App Title */}
          <Text className="text-4xl font-bold text-Bluemodern mb-4">
            Title of App
          </Text>

          {/* Welcome Text */}
          <Text className="text-lg text-center text-gray-700 mb-6">
            Welcome to the App! An image will appear here later.
          </Text>

          {/* Placeholder for Image */}
          <View className="relative w-full h-56 bg-gray-300 rounded-lg mb-6">
            <Text className="absolute inset-0 flex items-center justify-center text-white font-semibold">
              Image Placeholder
            </Text>
          </View>

          {/* Additional Text */}
          <Text className="text-2xl font-merriweatherbold text-Bluemodern mb-4">
            More Details
          </Text>

          <CustomButton
            title={"Login with Email"}
            handlePress={() => router.push("/sign-in")}
            containerStyle="mb-4"
            textStyles="text-xl"
            isLoading={false}
          />

          {/* Adjust StatusBar */}
          <StatusBar backgroundColor={"#FFFFFF"} style="dark" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
