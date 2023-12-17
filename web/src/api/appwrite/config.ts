import {Client, Account, Databases, Storage, Avatars} from 'appwrite';

export const appwriteConfig = {
    url: import.meta.env.VITE_APPWRITE_URL,
    projectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId : import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId : import.meta.env.VITE_APPWRITE_STORAGE_ID,
    dashboardCollectionId : import.meta.env.VITE_APPWRITE_DASHBOARD_COLLECTION_ID,
    streamCollectionId : import.meta.env.VITE_APPWRITE_STREAM_COLLECTION_ID,
    userSocialMediaCollectionId: import.meta.env.VITE_APPWRITE_USER_SOCIALMEDIA_ACCOUNTS_COLLECTION_ID,
}

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);


export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
