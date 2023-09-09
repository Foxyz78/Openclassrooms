import { Navigate, useParams } from "react-router-dom";

import Navbar from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import LodgingInfo from "../components/LodgingInfo";

import "../styles/logement.scss";

import data from "../data/datas.json";

const Logement = () => {
    const { id } = useParams();
    const lodging = data.find((datas) => datas.id === id);

    if (!lodging) {
        return <Navigate to="/404" />;
    }
    return (
        <>
            <Navbar />
            <Carousel lodging={lodging} />
            <LodgingInfo lodging={lodging} />
            <Footer />
        </>
    );
};
export default Logement;
