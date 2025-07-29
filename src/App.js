import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DataAnalyst from "./pages/DataAnalyst";
import FullStack from "./pages/FullStack";


console.log("LandingPage:", LandingPage);
console.log("DataAnalyst:", DataAnalyst);
console.log("FullStack:", FullStack);
console.log("DataAnalyst typeof:", typeof DataAnalyst);  // ✅ should log "function"
console.log("DataAnalyst:", DataAnalyst);                // ✅ should show the component code


function App() {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/data-analyst" element={<DataAnalyst />} />
        <Route path="/full-stack" element={<FullStack />} />
      </Routes>
    </Router>
  );
}

export default App;
