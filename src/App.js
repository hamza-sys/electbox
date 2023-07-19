
import './App.css';
import {ChakraProvider, Box} from '@chakra-ui/react'
import Navbar from './components/navbar';
import SearchBox from './components/navbar/searchBox';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      {/* <SearchBox /> */}
    </ChakraProvider>
  );
}

export default App;
