import TemperatureCrudPage from "./components/TemperatureCrudPage";
import TemperatureGraph from "./components/TemperatureGraph";
import {
  BrowserRouter, Route,
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import TemperatureAppHeader from "./components/TemperatureAppHeader";
import AppConstants from "./constants/AppConstants";

// TODO: routerはprovider使ったほうがわかりやすい
// → https://reactrouter.com/en/main/start/tutorial
function App() {
  return (
    <div className="App">
      {/* <TemperatureCrudPage /> */}
      <BrowserRouter>
        <TemperatureAppHeader />
        <Route exact path={AppConstants.TemperatureCrudPagePath}>
          <TemperatureCrudPage />
        </Route>
        <Route exact path={AppConstants.TemperatureGraphPath}>
          <TemperatureGraph />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
