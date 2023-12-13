import { Line } from "react-chartjs-2";
import { MyChartData } from "../types";

interface MetadataLineChartProps {
    chartData: MyChartData;
}

function MetadataLineChart({ chartData }: MetadataLineChartProps) {

    return (
        <div className="chart-container bg-light-1 px-10 py-4 rounded-md max-h-96">
            <Line
                data={chartData}

                options={{
                    plugins: {
                        title: {
                            display: false,
                            text: "Customer sentiment"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    },
                    maintainAspectRatio: true,
                    responsive: true,

                }}
            />
        </div>
    );
}
export default MetadataLineChart;