import { ID, Query } from "appwrite";

import { appwriteConfig, databases } from "./config";

export async function saveStreamDashboardToDB (dashboard : {
    useremail : string,
    dashboard : string,
    stream : string
}) {
    try { 
        const newDashboard = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.dashboardCollectionId,
            ID.unique(),
            dashboard
        );

        return newDashboard;
    }
    catch (error) {
        console.log(error);
    }
}

export async function getUserStreamDashboards (email? : string) {
    if (!email) return;
    try {
        const dashboard = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.dashboardCollectionId,
            [Query.equal("useremail", email)]
        );

        if (!dashboard) throw Error;

        return dashboard;
    }
    catch (error) {
        console.log(error);
    }
}

export async function getStreamDashboardIDFromDB (dashboardName? : string) {
    if (!dashboardName) return;

    const dashboard = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.dashboardCollectionId,
        [Query.equal("dashboard", dashboardName)],
    );

    if (!dashboard) throw Error;

    return dashboard.documents[0].$id;
}

export async function deleteStreamDashboardFromDB (dashboardName? : string) {
    if (!dashboardName) return;

    const dashboard_id = await getStreamDashboardIDFromDB(dashboardName);

    if (!dashboard_id) return;

    try {
        const statusCode = await databases.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.dashboardCollectionId,
            dashboard_id
        );

        if (!statusCode) throw Error;

        return { status : "Ok" };
    } catch (error) { 
        console.log(error);
    }
}

export async function saveStreamToDB (stream : {
    socialMedia : string,
    socialmedia_username : string,
    streamName : string,
}) {
    try {
        const newStream = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.streamCollectionId,
            ID.unique(),
            stream
        );

        return newStream;
    } catch (error) {
        console.log(error);
    }
}

export async function getStreamFromDB(streamName? : string) {
    console.log(streamName);
    if (!streamName) return;

    try {
        const stream = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.streamCollectionId,
            [Query.equal("streamName", streamName)]
        );

        if (!stream) throw Error;

        return stream;
    } catch (error) {
        console.log(error);
    }
}