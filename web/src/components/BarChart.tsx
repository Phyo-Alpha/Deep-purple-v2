import { Bar } from 'react-chartjs-2';
import { MyChartData } from '../types';

interface BarChartProps {
    chartData: MyChartData;
}

export function BarChart({ chartData }: BarChartProps) {
    return (
        <div className="chart-container" style={{ width: '50%', height: '50%' }}>
            <h2 style={{ textAlign: "center" }}>Emotion Analysis</h2>
            <Bar
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
    )
}