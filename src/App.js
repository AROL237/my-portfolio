import { Box, } from '@mui/material'
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { ProjectData, PersonalData } from "./components/ProjectData"
import './App.css'
function App() {


  return (
    <Box >
      <Navbar Data={PersonalData} />
      <Header Data={PersonalData} />

      <About Data={PersonalData} />
      <Education Data={PersonalData} />
      <Projects Data={ProjectData} PersonalData={PersonalData} />
      <Contact Data={PersonalData} />
    </Box>
  );
}

export default App;
