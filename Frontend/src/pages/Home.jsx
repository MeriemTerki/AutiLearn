import About from "../components/Home/About";
import Donate from "../components/Home/Donate";
import FAQ from "../components/Home/FAQ";
import Features from "../components/Home/Features";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="bg-customBgWhite w-full min-h-screen">
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="donate">
        <Donate />
      </div>
    </div>
  );
};

export default Home;
