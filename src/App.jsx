import ".//css/styles.css";
import Header from ".//components/Header";
import AppPage from ".//components/AppPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AppPage />} />
        <Route path="/search/:searchTerm" element={<Header/>} />
      </Routes>
    </Router>
  );
}
export default App;
