import React from "react";
import { Box, Heading } from "theme-ui";

const NotFoundPage = () => {
  return (
    <>
      <Heading>
        Page not found!
        <span role="img" aria-label="crying face">
          :(
        </span>
      </Heading>
      <Box as="h2" variant="styles.h2">
        It looks like the page does not exist
      </Box>
    </>
  );
};

export default NotFoundPage;
