export type IResolveParams = {
    provider : string,
    data : string,
}

export type MyNavLink = {
    imgURL: string,
    route: string,
    label: string,
}

export type Tweet = {
    tweet: string,
}

export type TweetData = {
    tweet: string,
    sentiment: string,
    emotion: emotion[],
    date: string,
}

export type emotion = {
    label: string,
    value: number,
}

export type MyChartData = {
    labels: string[],
    datasets: MyChartDataset[],
}

export type MyChartDataset = {
    label: string,
    data: number[],
    fill?: boolean,
    backgroundColor: string[],
    borderColor: string,
    borderWidth: number,
}

export type socialMediaAccount = {
    account_username : string,
    platform : string,
    useremail : string,
    socialmedia_feeds : string[],
}

export type userFeed = {
    name : string,
    username : string,
    tweets : userFeedData[],
}

export type userFeedData = {
    date : string,
    likes : string,
    views : string,
    reply_count : string,
    replies : userFeedReplies[],
    tweet : string,
    "tweet-id" : string,
}

export type userFeedReplies = {
    author : string,
    comment : string,
}

export type MyUserReplies = {
    author : string,
    reply_text : string,
    replied_to : string,
    author_replied_to: string,
    sentiment : string,
    emotion : string,
}

export type socialMediaStream = {
    socialMedia: string,
    socialmedia_username: string,
    streamName: string,
}

export type MyReportChart = {
    platform: string,
    charttype: string,
    charttitle: string,
    labels: string[],
    values: number[],
}

export type MySocialMediaFeed = {
    platform : string,
    account_username : string,
    post_id : string,
    post_text : string,
    date : string,
    views : number,
    likes : number,
    reply_count : number,  
    replies : string[],
}

export type MyMetaData = {
    Likes : number,
    Views : number,
    Replies : number,
}

