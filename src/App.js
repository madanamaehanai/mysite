import { BrowserRouter as Router, Route, Routes, Navigate } from
  "react-router-dom";
import Home from "./pages/home/Home";
import CompanyInformation from "./pages/home/CompanyInformation";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mysite/" element={<Home />} />
        <Route path="/mysite/companyinformation" element={<CompanyInformation />} />
      </Routes>
    </Router>
  );
}

export default App;
