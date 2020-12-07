import React from "react";
import Section from "components/Section";
import Features from "components/Features";

function FeaturesSection2(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <Features
          items={[
            {
              title: "Websites",
              subtitle:
                "While at Globant, I've been able to work with teams building web apps for clients like Disney, AirEuropa, WarnerMedia, among others. I've also made websites for other before that.",
              iconClass: "fas fa-globe",
              iconColor: "info",
            },
            {
              title: "Businesses",
              subtitle:
                "I've helped small businesses get online to reach more customers and also family members and friends launch their own idea with what I know about web development & online marketing",
              iconClass: "fas fa-briefcase",
              iconColor: "danger",
            },
            {
              title: "People",
              subtitle:
                "I've participated in various volunteering opportunities from Globant and found by myself, helping students from low resource communities develop their technical & interpersonal skills.",
              iconClass: "fas fa-users",
              iconColor: "success",
            },
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection2;
