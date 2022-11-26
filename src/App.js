import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Plants from "./pages/plants";
import Footer from "./components/footer";
import Header from "./components/header";
import Search from "./pages/search-plants";
import PlantDetail from "./pages/plant-detail";
import About from "./pages/about";
import PlantCategory from "./pages/plantbycategory";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="content">
          {/* deklarasi route yang digunakan*/}
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/search" element={<Search />} />
            <Route path="/details/:id" element={<PlantDetail />}></Route>
            <Route path="/category/:id" element={<PlantCategory />}></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
