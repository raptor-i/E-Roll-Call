import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route >
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/" element={<Home/> } />
        </Route>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
