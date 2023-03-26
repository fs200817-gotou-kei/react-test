import React, { Fragment } from 'react'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import ShowChart from '@mui/icons-material/ShowChart'
import AppConstants from '../constants/AppConstants'

// アプリで使用される基本的なヘッダーコンポーネント
const TemperatureAppHeader = () => {
    return (
        <Fragment>

            {/* 体温管理カレンダーへ遷移するボタン */}
            <Button href={AppConstants.TEMPERATURE_CRUD_PAGE_PATH} variant='outlined' startIcon={<EditIcon />}>
                {AppConstants.TEMPERATURE_CRUD_PAGE_NAME}
            </Button>

            {/* グラフ画面へ遷移するボタン */}
            <Button href={AppConstants.TEMPERATURE_GRAPH_PAGE_PATH} variant='outlined' startIcon={<ShowChart />}>
                {AppConstants.TEMPERATURE_GRAPH_PAGE_NAME}
            </Button>
        </Fragment>
    )
}

export default TemperatureAppHeader