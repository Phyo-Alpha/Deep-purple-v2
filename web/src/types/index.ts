export type MyNavLink = {
    imgURL: string,
    route: string,
    label: string,
}

export type MyChartData = {
    labels: number[],
    datasets: MyChartDataset[],
}

export type MyChartDataset = {
    label: string,
    data: number[],
    backgroundColor: string[],
    borderColor: string,
    borderWidth: number,
}