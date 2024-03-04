import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";
import MatchPage from "./components/MatchPage";
import ProfilePageUsers from "./components/ProfilePageUsers";
import NewsPage from "./components/NewsPage";
import NewsView from "./components/NewsView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/me" element={<ProfilePage />} />
        <Route
          path="/user/:id/:mostraStatistiche"
          element={<ProfilePageUsers />}
        />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
