import { Line } from "react-chartjs-2";
import { MyChartData } from "../types";

interface LineChartProps {
    chartData: MyChartData;
}

function LineChart({ chartData }: LineChartProps, title: string) {

    return (
        <div className="chart-container" style={{ width: '30%', height: '30%' }}>
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: false,
                            text: title
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