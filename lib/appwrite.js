import { Client, Account, ID, Avatars, Storage, Databases, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.company.farmersaathi",
    project: "6759b7cb001911bc6448",
    database: "6759b9cd003021aaebbe",
    UserCollectionId: "6759b9f000312d94b7ab",
    ImageCollectionId: "6759ba21000f36d1e137",
    StorageId: "6759bbcf0013730b0768",
    FormCollectionId: "67655c37002770d1dcaf",
};


const client = new Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.project);

const account = new Account(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const database = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newUser = await account.create(ID.unique(), email, password, username);
        console.log("User created successfully", newUser);

        const avatarsUrl = avatars.getInitials(username).href;

        await signIn(email, password);

        const userDocument = await database.createDocument(
            appwriteConfig.database,
            appwriteConfig.UserCollectionId,
            ID.unique(),
            {
                accountId: newUser.$id,
                username,
                email,
                avator: avatarsUrl,
            }
        );
        console.log("User document created", userDocument);
        return userDocument;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        console.log("User signed in successfully", session);
        return session;
    } catch (error) {
        console.error("Error signing in:", error);
        throw error;
    }
};

export const getCurrentUser = async () => {
    try {
        const user = await account.get();
        console.log("User fetched successfully", user);

        const currentUserDocument = await database.listDocuments(
            appwriteConfig.database,
            appwriteConfig.UserCollectionId,
            [Query.equal('accountId', user.$id)]
        );

        if (currentUserDocument.total > 0) {
            console.log("Current user document fetched", currentUserDocument.documents[0]);
            return currentUserDocument.documents[0];
        } else {
            console.error("No user document found");
            return null;
        }
    } catch (error) {
        console.error("Error fetching current user:", error);
        throw error;
    }
};

export const signOut = async () => {
    try {
        await account.deleteSession('current');
        console.log("User signed out successfully");
    } catch (error) {
        console.error("Error signing out:", error);
        throw error;
    }
};

export const updateUser = async (username, avator) => {
    try {
        const user = await getCurrentUser();
        console.log("User fetched successfully", user);

        const avatarsUrl = avator || avatars.getInitials(username).href;

        const updateFields = {};
        
        if (username) {
            updateFields.username = username;
        }

        if (avator || username) {
            updateFields.avator = avatarsUrl;
        }

        const updatedUserDocument = await database.updateDocument(
            appwriteConfig.database,
            appwriteConfig.UserCollectionId,
            user.$id,
            updateFields
        );

        console.log("User document updated", updatedUserDocument);
        return updatedUserDocument;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

export const getFilePreview = async (fileId,type) => {
    let fileUrl;
    try {
        if(type==='video'){
            fileUrl = await storage.getFileView(appwriteConfig.StorageId, fileId);
        } else if(type==='image'){
            fileUrl = await storage.getFilePreview(appwriteConfig.StorageId, fileId,
                2000,2000,'top',100);
        }else{
            throw new Error("Invalid file type");
        }
    } catch (error) {
        console.error("Error fetching file preview:", error);
        throw error;
    }
    return fileUrl;
}

export const uploadImage = async (file, type) => {
    // type = file.type || 'image';
    if (!file) {
        throw new Error("No file provided");
    }
    console.log("File to upload:", file);

    // Destructure the file object
    const { mimeType, ...rest } = file;

    // Create the asset object with the required structure
    const asset = {
        name: rest.fileName,
        type: mimeType,
        size: rest.fileSize,
        uri: rest.uri,
    };

    console.log("Uploading file:", asset);

    try {
        // Upload the file using Appwrite's createFile method
        const uploadedFile = await storage.createFile(
            appwriteConfig.StorageId, // Your Storage Bucket ID
            ID.unique(), // Generates a unique ID for the file
            asset // Pass the asset object
        );

        console.log("File uploaded successfully", uploadedFile);

        // Generate the file URL based on its type (image or video)
        // const fileUrl = await getFilePreview(uploadedFile.$id, type);

        return uploadedFile;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};

  
export const getImages = async () => {
    try {
        const images = await storage.listFiles(appwriteConfig.StorageId);
        console.log("Images fetched successfully", images);
        return images;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
};

export const deleteImage = async (fileId) => {
    try {
        await storage.deleteFile(appwriteConfig.StorageId, fileId);
        console.log("Image deleted successfully");
    } catch (error) {
        console.error("Error deleting image:", error);
        throw error;
    }
};

export const getProfileImage = async (fileId) => {
    try {
        const response = await storage.getFilePreview(appwriteConfig.StorageId, fileId);
        console.log("Profile image fetched successfully", response);
        return response;
    } catch (error) {
        console.error("Error fetching profile image:", error);
        throw error;
    }
};
export const addContact = async (contact) => {
    try {
        console.log("Adding contact:", contact);

        // Validate contact if needed

        const user = await getCurrentUser();
        console.log("User fetched successfully", user);
        console.log("user.$id", user.$id);

        const updatedUserDocument = await database.updateDocument(
            appwriteConfig.database,
            appwriteConfig.UserCollectionId,
            user.$id,
            { contact }
        );

        console.log("Contact added successfully", updatedUserDocument);
        return updatedUserDocument;
    } catch (error) {
        console.error("Error adding contact:", error.message || error);
        throw error;
    }
};


export const createForm = async (form) => {
    try {
        const user = await getCurrentUser();
        console.log("User fetched successfully", user);

        const {imageId, ...rest} = form;
        const type = imageId.type

        if (imageId) {
            const imageUrl = await uploadImage(imageId, type);
            form.imageId = imageUrl.$id;
        }

        console.log("Creating form:", form);


        const formDocument = await database.createDocument(
            appwriteConfig.database,
            appwriteConfig.FormCollectionId,
            ID.unique(),
            {
                accountId: user.$id,
                ...form,
            }
        );

        console.log("Form created successfully", formDocument);
        return formDocument;
    } catch (error) {
        console.error("Error creating form:", error);
        throw error;
    }
}


//fetching the data using name of the product

export const getProductByName = async (name) => {
    try {
        const products = await database.listDocuments(
            appwriteConfig.database,
            appwriteConfig.FormCollectionId,
            [Query.search('product', name)],
        );
        console.log("Products fetched successfully", products);
        return products.documents;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
export const getsubcatByName = async (name) => {
    try {
        const products = await database.listDocuments(
            appwriteConfig.database,
            appwriteConfig.FormCollectionId,
            [Query.search('subcategory', name)],
        );
        console.log("subcats fetched successfully", products);
        return products.documents;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const getProductsById = async (id) => {
    try {
        const product = await database.getDocument(
            appwriteConfig.database,
            appwriteConfig.FormCollectionId,
            id
        );
        console.log("Product fetched successfully", product);
        return product;
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
} 