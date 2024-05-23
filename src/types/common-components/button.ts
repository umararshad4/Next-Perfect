import React from "react";
export type AppButtonProp = {
  isLoading?: boolean;
  btnText: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  classnames: string;
  onclick?: () => void;
};
