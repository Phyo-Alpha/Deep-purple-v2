import home from "../assets/icons/home.svg";
import analytics from "../assets/icons/analytics.svg";
import report from "../assets/icons/report.svg";
import feedback from "../assets/icons/feedback.png";


export const sidebarLinks = [
    {
        imgURL: home,
        route: "/",
        label: "Route 1",
    },
    {
        imgURL: analytics,
        route: "/analytics/sentiment",
        label: "Route 2",
    },
    {
        imgURL: report,
        route: "/report/all-report",
        label: "Route 3",
    },
]

export const analyticsBoardLinks = [
    {
        imgURL: feedback,
        route: "/analytics/sentiment",
        label: "sentiment analysis",
    },
    {
        imgURL: feedback,
        route: "/analytics/metadata",
        label: "metadata analysis",
    },
    {
        imgURL: feedback,
        route: "/analytics/negativeposts",
        label: "negative sentiment filter",
    },
]