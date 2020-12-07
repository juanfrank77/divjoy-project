import React from "react";
import Navbar from "components/Navbar";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";

function ContactPage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <ContactSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Contact me"
        subtitle=""
        buttonText="Send message"
        showNameField={true}
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

export default ContactPage;
