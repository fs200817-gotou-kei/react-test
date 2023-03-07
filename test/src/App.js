import TemperatureAppHeader from "./ui/components/TemperatureAppHeader";

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
