import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import { Line as Graph } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from 'chart.js'

// TODO: Lineとの関連性を知る必要がある(複数のグラフを1画面で描画するときってこれどうなるの？)
// ↓現状これが暗黙的にLineの設定にもなっている感じ(ChartはChartで共通のツリーってことなのかな？)
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
)

// TODO: 定数化
// TODO: 変数回りもう少しわかりやすいようにオブジェクト型とかを工夫したほうがいい
const TemperatureGraph = () => {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [temperatureList, setTemperatureList] = useState([])
    const labels = [35.0, 35.5, 36.0, 36.5, 37.0, 37.5, 38.0, 38.5, 39.0]
    const data = {
        labels,
        datasets: [
            {
                label: '体温変化',
                data: temperatureList,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }
    const option = {}

    function selectDateHandle() {
    }

    return (
        <div>
            <p>対応変化グラフ</p>
            <DatePicker
            />
            <Graph
                data={data}
            />
        </div>
    )
}

export default TemperatureGraph;