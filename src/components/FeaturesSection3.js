import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Features2 from "components/Features2";

function FeaturesSection3(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <Features2
          items={[
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg",
            },
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image:
                "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
            },
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg",
            },
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg",
            },
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection3;
