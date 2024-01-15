import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import UnderConstruction from './UnderContruction';
import { Container } from 'react-bootstrap';
import { Projects } from './Pages/Projects';
import Techstack from './Pages/TechStack';
import { Typography } from '@mui/material';
import FindMeOn from './components/FindMeOn';
import Footer from './components/Footer';
import BlogsPage from './Pages/Blogs/BlogsPage';



function Skills() {
  return <>
  <br/><br/>
    <Container>
      <Typography variant='h3' style={{ textAlign: 'center' }}>
        My Professional <strong className="purple">Skillsets </strong>
      </Typography>

      <Techstack />
    </Container>
    <br/><br/><br/><br/><br/>
    <Footer stickToBottom={true} />
  </>
}

function Contact() {
  return <>
    <br/>
    <br/>
    <br/>
    <FindMeOn />
    <br/>
    <br/>
    <br/>
    <Footer stickToBottom={true} />
  </>
}

function App() {




  return (
    <>
      <BrowserRouter>

        <Nav />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
