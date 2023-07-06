import "./App.css";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">
        <Calculator />
      </header>
      <Footer />
    </div>
  );
}

export default App;
