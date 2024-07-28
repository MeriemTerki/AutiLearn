import Footer from "../components/Footer";
import About from "../components/Home/About";
import Donate from "../components/Home/Donate";
import FAQ from "../components/Home/FAQ";
import Features from "../components/Home/Features";
import Navbar from "../components/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
const Home = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const uid = user.uid;
        setUser(uid);
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);
  return (
    <div className="bg-customBgWhite w-full min-h-screen">
      <Navbar user={user} />
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
      <Footer />
    </div>
  );
};

export default Home;
