import TemperatureCrudPage from "../components/TemperatureCrudPage";
import TemperatureGraphPage from "../components/TemperatureGraphPage";
import AppConstants from "../constants/AppConstants";

import {
    createBrowserRouter, RouterProvider
} from "react-router-dom";

// ルーティング設定
const router = createBrowserRouter([

    // 体温を記録するカレンダーページへのルーティング
    {
        path: AppConstants.TEMPERATURE_CRUD_PAGE_PATH,
        element: <TemperatureCrudPage />
    },

    // 体温のグラフで表示するページへのルーティング
    {
        path: AppConstants.TEMPERATURE_GRAPH_PAGE_PATH,
        element: <TemperatureGraphPage />
    }
]);

// 各ページへのルーティングを行う
function AppRouterRrovider() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouterRrovider;