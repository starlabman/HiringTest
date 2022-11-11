import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineDeeppurpleA200: "border-2 border-deep_purple_A200 border-solid",
};
const shapes = { RoundedBorder20: "rounded-radius20" };
const sizes = {
  sm: "xl:pb-[10px] pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pt-[14px] xl:pt-[17px] pt-[20px] 3xl:pt-[24px] xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[8px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder20"]),
  variant: PropTypes.oneOf(["OutlineDeeppurpleA200"]),
  size: PropTypes.oneOf(["sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder20",
  variant: "OutlineDeeppurpleA200",
  size: "sm",
};

export { Input };
