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
    backgroundColor: string[],
    borderColor: string,
    borderWidth: number,
}

