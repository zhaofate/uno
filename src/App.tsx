import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/layouts/LoginForm";
import RegistForm from "./components/layouts/RegistForm";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/layout" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/layout" element={<Layout />}>
          <Route index element={<LoginForm />} />
          <Route path="register" element={<RegistForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
