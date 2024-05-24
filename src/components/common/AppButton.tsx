import React from "react";
import { Button } from "@nextui-org/react";
import { AppButtonProp } from "@/types/common-components/button";

const AppButton: React.FC<AppButtonProp> = ({
  btnText,
  classnames,
  endIcon,
  isLoading,
  startIcon,
  onclick,
}) => {
  return (
    <Button
      isLoading={isLoading}
      className={`${classnames}`}
      startContent={startIcon && !isLoading && startIcon}
      endContent={endIcon && !isLoading && endIcon}
      onClick={onclick}
    >
      {isLoading ? "Loading..." : btnText}
    </Button>
  );
};

export default AppButton;
