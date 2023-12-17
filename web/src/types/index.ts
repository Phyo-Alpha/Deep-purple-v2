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
    replies : string[],
    tweet : string,
    "tweet-id" : string,
}

export type socialMediaStream = {
    socialMedia: string,
    socialmedia_username: string,
    streamName: string,
}

