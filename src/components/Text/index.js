import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[32px] xl:text-[40px] text-[45px] 3xl:text-[54px]",
  h2: "font-bold lg:text-[28px] xl:text-[35px] text-[40px] 3xl:text-[48px]",
  h3: "lg:text-[19px] xl:text-[24px] text-[28px] 3xl:text-[33px]",
  h4: "lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h5: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  h6: "font-light lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body1:
    "font-medium lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body2: "lg:text-[10px] xl:text-[13px] text-[15px] 3xl:text-[18px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
