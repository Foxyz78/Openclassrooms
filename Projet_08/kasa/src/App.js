import { Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./styles/home.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Logement from "./pages/Logement";

library.add(faStar);
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/logement/" element={<Logement />} />
            </Routes>
        </>
    );
}

export default App;
