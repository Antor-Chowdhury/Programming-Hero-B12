import React from "react";
import Banner from "../components/Banner/Banner";
import State from "../components/State/State";
import useApps from "../hooks/UseApps";
import Loader from "../components/Loader/Loader";
import TopAppSection from "../components/Top-App-Section/TopAppSection";

const Home = () => {
  const { apps, loading } = useApps();
  //   console.log(apps);

  if (loading) {
    return (
      <div className="relative h-[calc(100vh-452px)] flex items-center justify-center">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <Banner></Banner>
      </div>
      <State></State>
      <div className="max-w-[1440px] mx-auto">
        <TopAppSection apps={apps}></TopAppSection>
      </div>
    </div>
  );
};

export default Home;
