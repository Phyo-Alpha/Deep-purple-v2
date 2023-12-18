import { getPostsMadeByThatAccount } from "../api/appwrite/api";

export async function getMetaDataOfThatAccount(account_username: string){
    
    if (!account_username) return;

    const posts = await getPostsMadeByThatAccount(account_username);
    
    if (posts === undefined || posts?.total === 0) return;

    let metaData = {
        Views : 0,
        Replies : 0,
        Likes : 0
    }

    posts.documents.forEach((post) => {
        metaData.Views += post.views;
        metaData.Replies += post.reply_count;
        metaData.Likes += post.likes;
    });
    
    return metaData;
} 