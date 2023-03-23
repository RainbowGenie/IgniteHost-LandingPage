import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
