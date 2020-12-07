import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import SectionButton from "components/SectionButton";
import "components/HeroSection3.scss";

function HeroSection3(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column">
            <figure className="HeroSection3__image image">
              <img src={props.image} alt="Illustration" />
            </figure>
          </div>
          <div className="column is-1" />
          <div className="column is-6-desktop has-text-centered-touch">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={true}
            />
            <div className="buttons is-inline-flex">
              <SectionButton
                parentColor={props.color}
                size="medium"
                onClick={props.buttonOnClick}
              >
                {props.buttonText}
              </SectionButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection3;
