import About from "../components/Home/About";
import Features from "../components/Home/Features";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="bg-slate-50	w-full min-h-screen">
      <Navbar />
      <About />
      <Features />
    </div>
  );
};

export default Home;
