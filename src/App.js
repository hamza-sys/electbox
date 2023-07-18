
import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import Navbar from './components/navbar';

function App() {
  return (
    <ChakraProvider>
     <Navbar />
    </ChakraProvider>
  );
}

export default App;
