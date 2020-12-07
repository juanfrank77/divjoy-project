import React from "react";
import BackgroundImage from "components/BackgroundImage";
import "components/Section.scss";

function Section(props) {
  const {
    color,
    size,
    backgroundImage,
    backgroundImageOpacity,
    backgroundImageRepeat,
    className,
    children,
    // Passed to section element
    ...otherProps
  } = props;

  return (
    <section
      className={
        "SectionComponent is-block is-relative is-small section" +
        (color ? ` is-${color}` : "") +
        (size ? ` is-${size}` : "") +
        (className ? ` ${className}` : "")
      }
      {...otherProps}
    >
      {backgroundImage && (
        <BackgroundImage
          image={backgroundImage}
          opacity={backgroundImageOpacity}
          repeat={backgroundImageRepeat}
        />
      )}

      {props.children}
    </section>
  );
}

export default Section;
