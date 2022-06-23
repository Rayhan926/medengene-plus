import Header from "@components/Header";
import React from "react";
import BlogSection from "./components/BlogSection";
import ClientsSection from "./components/ClientsSection";
import HeroSection from "./components/HeroSection";
import QualityYourHealthSection from "./components/QualityYourHealthSection";
import ScelerisqueAtAuctor from "./components/ScelerisqueAtAuctor";
import SliderSection from "./components/SliderSection";
import TeamSection from "./components/TeamSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <QualityYourHealthSection />
      <TeamSection />
      <SliderSection />
      <ScelerisqueAtAuctor />
      <ClientsSection />
      <BlogSection />
    </>
  );
};

export default Home;
