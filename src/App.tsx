import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Search from "./Components/Search";
import SearchResult from "./Components/SearchResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/searchResult" element={<SearchResult />} />
    </Routes>
  );
}

export default App;
