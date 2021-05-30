import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { Box } from "theme-ui";

export const Footer = ({ children }) => {
  return (
    <Box as="header" sx={{ bg: "highlight", mb: "1.45rem" }}>
      <Box
        as="div"
        sx={{ m: "0 auto", maxWidth: "640px", p: "1.45rem 1.0875rem" }}
      >
        <Box sx={{ flex: "1 1 auto", flexDirection: "column" }}>
          Copyright All rights reserved- SHASHWAT NANDAN
          <Box as="p" variant="styles.p">
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
