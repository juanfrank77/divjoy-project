import React from "react";
import Section from "components/Section";
import "components/Footer.scss";

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
      className="footer"
    >
      <div className="FooterComponent__container container">
        <div className="copyright align-left">{props.copyright}</div>
        <div className="social align-right">
          <a
            href="https://twitter.com/juanfrank77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <a
            href="https://linkedin.com/in/juanfrank77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-linkedin-in" />
            </span>
          </a>
          <a
            href="https://github.com/juanfrank77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-github" />
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
