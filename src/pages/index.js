import React from "react";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import HeroSection2 from "components/HeroSection2";
import FeaturesSection from "components/FeaturesSection";
import FeaturesSection2 from "components/FeaturesSection2";
import NewsletterSection from "components/NewsletterSection";
import Footer from "components/Footer";
import { useRouter } from "next/router";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <HeroSection
        color="white"
        size="normal"
        backgroundImage="https://juanfrank77.github.io/portfolio/images/background.jpg"
        backgroundImageOpacity={1}
        title="Hi, I'm Juan Gonzalez"
        subtitle="Developer. Writer. Learner"
      />
      <HeroSection2
        color="link"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Mini Bio"
        subtitle="This is where I write a very brief description about me and my trajectory."
        buttonText="See more about me"
        image="https://avatars2.githubusercontent.com/u/12146882?s=460&u=b153ac0c446ac31c230cfe6b1a98bd54ca74e39a&v=4"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/about");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="What I develop"
      />
      <FeaturesSection2
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
      />
      <HeroSection2
        color="info"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Currently doing"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="See what's now"
        image=""
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/now");
        }}
      />
      <NewsletterSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
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

export default IndexPage;
