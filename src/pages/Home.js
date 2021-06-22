import React from "react";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam"
import SGP from "../images/sgp-logo.jpg";

function Home() {
  return (
    <div>
      <img src={SGP} alt="stuff" id="logo" />

      <h1>Welcome to SGP</h1>
      <AboutUs />
      <OurTeam />
    </div>
  );
}

export default Home;
