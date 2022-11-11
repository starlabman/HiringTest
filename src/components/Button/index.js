import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder20: "rounded-radius20" };
const variants = {
  OutlineDeeppurpleA200:
    "outline outline-[0.5px] outline-deep_purple_A200 text-deep_purple_A200_7f",
  OutlineBlack90026: "bg-deep_purple_A400 shadow-bs text-white_A700",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  md: "lg:p-[13px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder20"]),
  variant: PropTypes.oneOf(["OutlineDeeppurpleA200", "OutlineBlack90026"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder20",
  variant: "OutlineDeeppurpleA200",
  size: "md",
};

export { Button };
