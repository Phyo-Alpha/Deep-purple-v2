import { Line } from "react-chartjs-2";
import { MyChartData } from "../types";

interface LineChartProps {
    chartData: MyChartData;
}

function LineChart({ chartData }: LineChartProps) {

    return (
        <div className="chart-container px-10 py-4 rounded-md" style={{ width: '60%' }}>
            <h2 style={{ textAlign: "center" }} className="text-dark-1">Sentiment Trend Analysis</h2>
            <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: false,
                            text: "Customer sentiment"
                        },
                        legend: {
                            display: false,
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: true,
                }}
            />
        </div>
    );
}
export default LineChart;