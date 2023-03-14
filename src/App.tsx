import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App mx-auto max-w-screen-xl mt-12 mb-12">
      <Router>
        <Header />

        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} />
          ))}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
