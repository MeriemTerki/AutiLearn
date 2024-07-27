import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";
const Footer = () => {
  return (
    <footer className="footer bg-customTextBlack text-white p-10">
      <nav>
        <div className="flex flex-row gap-2 ">
          <div className="avatar">
            <div className=" rounded-full">
              <img src={avatar} className="w-4/5 h-4/5" />
            </div>
          </div>
          <h6 className="font-bold text-xl text-white flex items-center">
            AutiLearn
          </h6>
        </div>
        <p className="text-white text-justify w-full md:w-2/4">
          Your go-to a platform to help children with autism unlock their full
          potential.
        </p>
      </nav>

      <nav>
        <h6 className="font-bold text-white text-lg">Quick Menu</h6>
        <a className="link link-hover" href="#about">
          About
        </a>
        <a className="link link-hover" href="#features">
          Features
        </a>
        <a className="link link-hover" href="#faq">
          FAQ
        </a>
        <Link className="link link-hover" to="/signup">
          Get Started
        </Link>
      </nav>
      <form>
        <h6 className="font-bold text-white text-lg">
          Subscribe to our newletter
        </h6>

        <h6 className="text-white">
          Subscribe now to be updates with the latest features
        </h6>
        <fieldset className="form-control w-80">
          <div className="join">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered border-0 join-item rounded-none bg-white"
            />
            <Link className="btn bg-customButton text-xl text-customText border-0 rounded-none px-4 py-0 hover:bg-customButtonDarker">
              Subscribe
            </Link>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
