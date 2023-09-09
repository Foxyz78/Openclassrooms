import { Routes, Route, Navigate } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/*" element={<Navigate to="/404" />} />
            </Routes>
        </>
    );
}

export default App;
