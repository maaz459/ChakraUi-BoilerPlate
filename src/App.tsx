import * as React from "react";
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./utils/ColorModeSwitcher";
import { Logo } from "./Logo";
import { theme } from "./theme/index";
import Fonts from "./assets/fonts";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link color="teal.500" href="https://chakra-ui.com" fontSize="2xl" target="_blank" rel="noopener noreferrer">
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
