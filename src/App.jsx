import About from "./Pages/About";
import Hero from "./Pages/Hero";
import "remixicon/fonts/remixicon.css";
import InternshipProgram from "./Pages/InternshipProgram";
import ChoosePath from "./Pages/ChoosePath";
import InternsCommunity from "./Pages/InternsCommunity";
import Lab from "./Pages/Lab";
import Footer from "./Pages/Footer";
import Internships from "./Pages/Internships";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <About></About>
      <InternshipProgram></InternshipProgram>
      <ChoosePath></ChoosePath>
      <Internships></Internships>
      <InternsCommunity></InternsCommunity>
      <Lab></Lab>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
