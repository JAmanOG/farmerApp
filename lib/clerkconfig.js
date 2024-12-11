import * as SecureStore from "expo-secure-store";

export const clerkFrontendApi = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export const clerkConfig = {
    tokenStorage: SecureStore,
};
