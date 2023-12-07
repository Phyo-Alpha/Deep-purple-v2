export type MyNavLink = {
    imgURL: string,
    route: string,
    label: string,
}

export type Tweet = {
    tweet: string,
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