import NavBar from "../components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Question from "../components/Question";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question" element={<Question />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
