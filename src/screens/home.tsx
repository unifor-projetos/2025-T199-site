import React from "react";
import { Container } from "react-bootstrap";
import LandingBanner from "../components/landingBanner";
import InteractiveMap from "../components/map";
import ExhibitionCarousel from "../components/exhibitionCarousel";

const Home: React.FC = () => {
  return (
    <div className="unifor-theme">
      <LandingBanner />
      <Container className="py-5">
        <InteractiveMap />
        <ExhibitionCarousel title="Exposições" type="current" />
        <ExhibitionCarousel title="Vindo Por Aí" type="upcoming" />
      </Container>
    </div>
  );
};

export default Home;
