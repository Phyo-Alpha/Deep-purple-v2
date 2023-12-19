import { getPostsMadeByThatAccount, getRepliesToThatAuthor } from "../api/appwrite/api";
import { MyEmotionData, MySentimentTableData } from "../types";

export async function getMetaDataOfThatAccount(account_username: string){
    
    if (!account_username) return;

    const posts = await getPostsMadeByThatAccount(account_username);
    
    if (posts === undefined || posts?.total === 0) return;

    let metaData = {
        Views : 0,
        Replies : 0,
        Likes : 0,
        latestLikes : 0,
        dailyAverageLikes : 0,
        likesAverage : 0,
        viewsAverage : 0,
        repliesAverage : 0,
    }

    posts.documents.forEach((post) => {
        metaData.Views += post.views;
        metaData.Replies += post.reply_count;
        metaData.Likes += post.likes;
    });

    metaData.viewsAverage = metaData.Views / posts.documents.length;
    metaData.repliesAverage = metaData.Replies / posts.documents.length;
    metaData.likesAverage = metaData.Likes / posts.documents.length;

    posts.documents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (posts.documents.length > 7) {
        
        const latestPosts = posts.documents.slice(0, 7);

        let totalLikes = 0;

        latestPosts.forEach((post) => {
            totalLikes += post.likes;
        });

        // Calculate the daily average likes
        const dailyAverageLikes = totalLikes / 7;

        console.log('Total likes for the 7 latest posts:', totalLikes);
        console.log('Daily average likes for the 7 latest posts:', dailyAverageLikes);

        metaData.latestLikes = totalLikes;
        metaData.dailyAverageLikes = dailyAverageLikes;
    } else {
        const latestPosts = posts.documents.slice(0, posts.documents.length);

        let totalLikes = 0;

        latestPosts.forEach((post) => {
            totalLikes += post.likes;
        });

        // Calculate the daily average likes
        const dailyAverageLikes = totalLikes / posts.documents.length;

        console.log('Total likes for the 7 latest posts:', totalLikes);
        console.log('Daily average likes for the 7 latest posts:', dailyAverageLikes);

        metaData.latestLikes = totalLikes;
        metaData.dailyAverageLikes = dailyAverageLikes;
    }
    
    
    return metaData;
} 

export async function getSentimentDataOfThatAccount(account_username: string){
    
    if (!account_username) return;

    const posts = await getRepliesToThatAuthor(account_username);
    
    if (posts === undefined || posts?.total === 0) return;

    let positiveCount = 0;
    let negativeCount = 0;
    let totalSentiment = 0;

    posts.documents.forEach((post) => {
        if (post.sentiment === 'positive') {
            positiveCount++;
        } else if (post.sentiment === 'negative') {
            negativeCount++;
        }
    });
    totalSentiment = positiveCount + negativeCount;
    let positivePercentage = parseFloat((positiveCount / totalSentiment).toFixed(2));

    const sentimentData = {
        positivePercentage: positivePercentage,
        negativePercentage: 1 - positivePercentage,
        positiveCount: positiveCount,
        negativeCount: negativeCount,
        totalSentiment: totalSentiment,
    }

    return sentimentData;

}

export async function getSentimentTableDataOfThatAccount(account_username: string){
    
    if (!account_username) return;

    const replies = await getRepliesToThatAuthor(account_username, 100);
    
    if (replies === undefined || replies?.total === 0) return;

    const posts = await getPostsMadeByThatAccount(account_username, 100);

    if (posts === undefined || posts?.total === 0) return;

    const sentimentTableData: MySentimentTableData[] = posts.documents.map(doc => {
        const docReplies = replies.documents.filter(reply => reply.replied_to === doc.post_id);
        const positiveCount = docReplies.filter(reply => reply.sentiment === 'positive').length;
        const overallSentiment = parseFloat(docReplies.length > 0 ? (positiveCount / docReplies.length * 100).toFixed(2) : '0');
        
        const qualitativeSentiment = overallSentiment >= 80 ? 'very positive' :
                                overallSentiment >= 60 ? 'positive' :
                                overallSentiment >= 40 ? 'neutral' :
                                overallSentiment >= 20 ? 'negative' :
                                                         'very negative';
      
        return {
          postId: doc.post_id,
          platform: doc.platform,
          postlink: "https://twitter.com/Ogo4200/status/" + doc.post_id, 
          date: doc.date,
          overall_sentiment: qualitativeSentiment,
          negative_count: docReplies.length - positiveCount,
          positive_count: positiveCount,
        };
    });

    console.log(sentimentTableData);
    return sentimentTableData;
} 

export async function getEmotionDataOfThatAccont(account_username: string){
    if (!account_username) return;

    const replies = await getRepliesToThatAuthor(account_username, 200);
    
    if (replies === undefined || replies?.total === 0) return;

    const emotionCounts = replies.documents.reduce((acc: {[key: string]: number}, doc) => {
        const emotion = doc.emotion;
        acc[emotion] = (acc[emotion] || 0) + 1;
        return acc;
    }, {});
    
    const sentimentCounts = replies.documents.reduce((acc: {[key: string]: number}, doc) => {
        const sentiment = doc.sentiment;
        acc[sentiment] = (acc[sentiment] || 0) + 1;
        return acc;
    }, {});
    
    const emotionData : MyEmotionData = {
        anger: emotionCounts.anger,
        fear: emotionCounts.fear,
        joy: emotionCounts.joy,
        sadness: emotionCounts.sadness,
        love: emotionCounts.love,
        surprise: emotionCounts.surprise,
        positiveCount: sentimentCounts.positive,
        negativeCount: sentimentCounts.negative,
    }

    return emotionData;
}