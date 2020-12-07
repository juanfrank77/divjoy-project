import React from "react";
import Navbar from "components/Navbar";
import FeaturesSection3 from "components/FeaturesSection3";
import Footer from "components/Footer";

function NowPage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <FeaturesSection3
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
      <Footer
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        copyright="© 2020 Juan F Gonzalez"
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default NowPage;
