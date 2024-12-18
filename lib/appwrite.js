import { Client, Account, ID,  Avatars,Storage, Databases, Query,OAuthProvider } from 'react-native-appwrite';

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
let storage;

client = new Client();
storage = new Storage(client);
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

export const signOut = async () => {
    try {
        await account.deleteSession('current');
        console.log("User signed out successfully");
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

//update user username and profile picture

export const updateUser = async (username, avator) => {
    try {
        const user = await account.get();
        if (user) {
            console.log("User fetched successfully");
        }
        if (!user) {
            console.log("User fetch failed");
        }

        const avatarsUrl = avatars.getInitials(
            username
        )||'';

        const updatedUser = await database.updateDocument(
            appwriteConfig.database,
            appwriteConfig.UserCollectionId,
            user.$id,
            {
                username,
                avator: avator || avatarsUrl
            }
        );

        if (updatedUser) {
            console.log("User updated successfully");
        }
        if (!updatedUser) {
            console.log("User update failed");
        }

        return updatedUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const uploadImage = async (file) => {
    try {
        const fileData = new File([file], file.name, { type: file.type });
        const response = await storage.createFile(fileData);
        if (response) {
            console.log("Image uploaded successfully");
        }
        if (!response) {
            console.log("Image upload failed");
        }

        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const getImages = async () => {
    try {
        const images = await storage.listFiles();
        if (images) {
            console.log("Images fetched successfully");
        }
        if (!images) {
            console.log("Images fetch failed");
        }

        return images;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const deleteImage = async (fileId) => {
    try {
        const response = await storage.deleteFile(fileId);
        if (response) {
            console.log("Image deleted successfully");
        }
        if (!response) {
            console.log("Image delete failed");
        }

        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const getProfileImage = async (fileId) => {
    try {
        const response = await storage.getFilePreview(fileId);
        if (response) {
            console.log("Profile image fetched successfully");
        }
        if (!response) {
            console.log("Profile image fetch failed");
        }

        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

// add contact field to user

export const addContact = async (contact) => {
    try {
        const user = await account.get();
        if (user) {
            console.log("User fetched successfully");
        }
        if (!user) {
            console.log("User fetch failed");
        }

        const updatedUser = await database.updateDocument(
            appwriteConfig.database,
            appwriteConfig.UserCollectionId,
            user.$id,
            {
                contact
            }
        );

        if (updatedUser) {
            console.log("Contact added successfully");
        }
        if (!updatedUser) {
            console.log("Contact add failed");
        }

        return updatedUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}



