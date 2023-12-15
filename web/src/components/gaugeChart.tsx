import GaugeChart from 'react-gauge-chart'

export default function MyGaugheChart() {
    const chartStyle = {
        textColor: 'black',
    }
    return (
        <div style={{ width: '100%' }}>
            <GaugeChart id="gauge-chart4"
                nrOfLevels={10}
                arcPadding={0.1}
                cornerRadius={3}
                percent={0.6}
                textColor='black'
            />
        </div>

    )
}