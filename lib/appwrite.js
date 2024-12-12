import { Client, Account, ID,  Avatars, Databases, Query,OAuthProvider } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.company.farmersaathi",
    project: "6759b7cb001911bc6448",
    database: "6759b9cd003021aaebbe",
    UserCollectionId: "6759b9f000312d94b7ab",
    ImageCollectionId: "6759ba21000f36d1e137",
    StorageId: "6759bbcf0013730b0768",
};

let client;
let account;

client = new Client();
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.project)   // Your Project ID
    .setPlatform(appwriteConfig.platform)

account = new Account(client);
const avatars = new Avatars(client);

const database = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newUser = await account.create(ID.unique(), email, password, username);
        if (newUser) {
            console.log("User created successfully");
        }
        if (!newUser) {
            console.log("User creation failed");
        }

        const avatarsUrl = avatars.getInitials(
            username
        )||'';

        await SignIn(email, password)

        const user = await database.createDocument(
            appwriteConfig.database,
            appwriteConfig.UserCollectionId,
            ID.unique(),
            {
                accountId: newUser.$id,
                username,
                email,
                avator: avatarsUrl
            }        )

        return user;


    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const SignIn = async (email, password) => {
    try {
        const user = await account.createEmailPasswordSession(email, password);
        if (user) {
            console.log("User signed in successfully");
        }
        if (!user) {
            console.log("User sign in failed");
        }

        return user;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const user = await account.get();
        if (user) {
            console.log("User fetched successfully");
        }
        if (!user) {
            console.log("User fetch failed");
        }
        const CurrentUser = await database.listDocuments(
            appwriteConfig.database,
            appwriteConfig.UserCollectionId,
            [Query.equal('accountId', user.$id)]
        );

        if (CurrentUser) {
            console.log("Current user fetched successfully");
        }
        if (!CurrentUser) {
            console.log("Current user fetch failed");
        }

        return CurrentUser.documents[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


// import { Client, Account, ID,  Avatars, Databases, Query,OAuthProvider } from 'react-native-appwrite';
// import { useAuth } from "@clerk/clerk-expo";

// export const appwriteConfig = {
//     endpoint: process.env.endpoint,
//     platform: process.env.platform,
//     project: process.env.project,
//     database: process.env.database,
//     UserCollectionId: process.env.UserCollectionId,
//     ImageCollectionId: process.env.ImageCollectionId,
//     StorageId: process.env.StorageId,
// };

// let client;
// let account;

// client = new Client();
// client
//     .setEndpoint(appwriteConfig.endpoint)
//     .setProject(appwriteConfig.project)   // Your Project ID
//     .setPlatform(appwriteConfig.platform)

// account = new Account(client);
// const avatars = new Avatars(client);

// const database = new Databases(client);
// export const clerkSignIn = async () => {
//     const { signInWithOAuth, getToken } = useAuth();
//     try {
//         const response = await signInWithOAuth({ provider: "google" });
//         const token = await getToken();
//         console.log("Clerk Sign-In Successful:", response);
//         return token;
//     } catch (error) {
//         console.error("Clerk Sign-In Error:", error);
//         throw new Error(error);
//     }
// };

// export const syncUserWithAppwrite = async (username, token) => {
//     try {
//         const newUser = await appwriteDatabase.createDocument(
//             appwriteConfig.database,
//             appwriteConfig.UserCollectionId,
//             ID.unique(),
//             { username, token }
//         );
//         console.log("User synced with Appwrite:", newUser);
//         return newUser;
//     } catch (error) {
//         console.error("Error syncing user with Appwrite:", error);
//         throw new Error(error);
//     }
// };


// export const createUser = async (email, password, username) => {
//     try {
//         const newUser = await account.create(ID.unique(), email, password, username);
//         if (newUser) {
//             console.log("User created successfully");
//         }
//         if (!newUser) {
//             console.log("User creation failed");
//         }

//         const avatarsUrl = avatars.getInitials(
//             username
//         )||'';

//         await SignIn(email, password)

//         const user = await database.createDocument(
//             appwriteConfig.database,
//             appwriteConfig.UserCollectionId,
//             ID.unique(),
//             {
//                 accountId: newUser.$id,
//                 username,
//                 email,
//                 avator: avatarsUrl
//             }        )

//         return user;


//     } catch (error) {
//         console.log(error);
//         throw new Error(error);
//     }
// }

// export const SignIn = async (email, password) => {
//     try {
//         const user = await account.createEmailPasswordSession(email, password);
//         if (user) {
//             console.log("User signed in successfully");
//         }
//         if (!user) {
//             console.log("User sign in failed");
//         }

//         return user;
//     } catch (error) {
//         console.log(error);
//         throw new Error(error);
//     }
// }

// export const getCurrentUser = async (clerkToken) => {
//     try {
//         const user = await appwriteDatabase.listDocuments(
//             appwriteConfig.database,
//             appwriteConfig.UserCollectionId,
//             [`equal("token", "${clerkToken}")`]
//         );
//         return user.documents[0];
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         throw new Error(error);
//     }
// };


