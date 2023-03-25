import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import ShowChart from '@mui/icons-material/ShowChart'


// TODO: Link toもちょっと長くてわかりづらい
function TemperatureAppHeader() {
    return (
        <div>
            <Link to="/">
                <Button variant='outlined' startIcon={<EditIcon />}>
                    対応記録
                </Button>
            </Link>
            <Link to="/temperatures">
                <Button variant='outlined' startIcon={<ShowChart />}>
                    グラフ
                </Button>
            </Link>
        </div >
    )
}

export default TemperatureAppHeader