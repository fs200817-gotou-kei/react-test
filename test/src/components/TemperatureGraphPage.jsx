import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import { Line as Graph } from 'react-chartjs-2'
import TemperatureAppHeader from './TemperatureAppHeader'

import AppConstants from '../constants/AppConstants'

const TemperatureGraphPage = () => {

    const [startDate, setStartDate] = useState('2023-03-26')
    const [endDate, setEndDate] = useState('2023-03-27')
    const [temperatureList, setTemperatureList] = useState([35.5, 36.8, 39.0])
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
            <TemperatureAppHeader />
            <p>{AppConstants.TEMPERATURE_GRAPH_PAGE_NAME}</p>
            <DatePicker
            />
            <Graph
                data={data}
            />
        </div>
    )
}

export default TemperatureGraphPage;