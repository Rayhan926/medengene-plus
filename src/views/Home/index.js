import Header from "@components/Header";
import React from "react";
import BlogSection from "./components/BlogSection";
import HeroSection from "./components/HeroSection";
import QualityYourHealthSection from "./components/QualityYourHealthSection";
import ScelerisqueAtAuctor from "./components/ScelerisqueAtAuctor";
import TeamSection from "./components/TeamSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <QualityYourHealthSection />
      <TeamSection />
      <ScelerisqueAtAuctor />
      <BlogSection />
    </>
  );
};

export default Home;
