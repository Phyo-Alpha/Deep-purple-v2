import { useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart'

interface ChartData {
    positivePercentage: number | undefined;
}

export default function MyGaugheChart({ positivePercentage }: ChartData) {

    const [positivePercentageState, setPositivePercentageState] = useState<number | undefined>(positivePercentage);

    const chartStyle = {
        textColor: 'black',
    }

    useEffect(() => {
        if (positivePercentageState !== undefined) {
            setPositivePercentageState(50);
        }
        else {
            setPositivePercentageState(positivePercentage);
        }
    }, [positivePercentageState])
    return (
        <div style={{ width: '100%' }}>
            <GaugeChart id="gauge-chart4"
                nrOfLevels={10}
                arcPadding={0.1}
                cornerRadius={3}
                percent={positivePercentage}
                textColor='black'
            />
        </div>

    )
}