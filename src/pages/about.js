import React from "react";
import Navbar from "components/Navbar";
import HeroSection3 from "components/HeroSection3";
import Footer from "components/Footer";
import { useRouter } from "next/router";

function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <HeroSection3
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Craft beer delivered right to your door"
        subtitle="What if instead of normal mail, you got normal mail and also beer sometimes. We can make that happen."
        buttonText="Count me in"
        image="https://uploads.divjoy.com/undraw-beer_celebration_cefj.svg"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
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

export default AboutPage;
