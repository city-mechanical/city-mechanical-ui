import React from "react";
import { Button } from "@clutchd/ui";
import Theme from "../theme";
const CmiTheme = Theme;

const CmiButton = ({ children, ...props }) => {
  return (
    <Button theme={CmiTheme} {...props}>
      {children}
    </Button>
  );
};

export default CmiButton;
