import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = (props) => {
  console.log("props", props);
  const variantClasses = {
    primary: ["bg-brand-blue1", "hover:bg-brand-blue2", "text-white"],
    secondary: [
      "bg-white",
      "hover:bg-brand-light-blue",
      "border",
      "border-brand-blue1",
      "text-brand-blue1",
    ],
    tertiary: [
      "bg-brand-light-blue",
      "hover:bg-brand-blue1",
      "hover:text-white",
      "text-brand-blue1",
    ],
  };

  const classes = classNames(
    props.variant ? variantClasses[props.variant] : variantClasses.primary,
    "font-normal",
    "py-2",
    "px-6",
    "rounded",
    "flex",
    "items-center",
    "justify-center",
    props.size && `text-${props.size}`,
    props.className
  );

  console.log("classes", classes);

  const Component = props.as || "button";
  return (
    <Component {...props} className={classes}>
      {props.children}
    </Component>
  );
};

const propTypes = {
  size: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.oneOf(["button", "reset", "submit", null]),
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  as: PropTypes.elementType,
};

// const defaultProps = {
// };

Button.propTypes = propTypes;
// Button.defaultProps = defaultProps;

export { Button };
