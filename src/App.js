import React, { useState } from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { EventListing } from "./views/EventListing";
import { AddEventComponent } from "components/reusable-components/AddEventButton";
function App() {
  const [val, setVal] = useState(false);
  const passVal = (s) => {
    if (s === true) {
      window.scrollTo(0, 120);
    }
    setVal(s);
  };
  const cancelModal_fall_back = (s) => {
    setVal(s);
  };
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh">
            {val !== undefined && (
              <EventListing
                cancelModal_fall_back={(s) => {
                  cancelModal_fall_back(s);
                }}
                getVal={val}
              />
            )}

            <AddEventComponent passValModal={val} passVal={(s) => passVal(s)} />
          </Grid>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
