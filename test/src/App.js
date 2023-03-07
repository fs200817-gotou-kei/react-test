import TemperatureAppHeader from "./ui/components/TemperatureAppHeader";
import TemperatureCrudPage from "./ui/components/TemperatureCrudPage";

function App() {
  const name = "Dave"

  return (
    <div className="App">
      <header className="App-header">
        <TemperatureAppHeader />
      </header>
      <body>
        <TemperatureCrudPage />
      </body>
    </div>
  );
}

export default App;
