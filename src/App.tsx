import "./App.scss";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import AuthenticationForm from "./Components/AuthenticationForm";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<AuthenticationForm />} />
    </Routes>
  );
}

export default App;
