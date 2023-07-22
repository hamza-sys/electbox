import "./App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Main />
    </ChakraProvider>
  );
}

export default App;
