import landingImage from "../../assets/landingImage.svg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-customBgBlue p-4">
      <div className="flex-1 p-4 items-center justify-center md:w-1/3 order-1 md:order-2">
        <img
          src={landingImage}
          alt="Landing Image"
          className="w-full  rounded-lg"
        />
      </div>
      <div className="flex-1 p-4 md:w-2/3 order-2 md:order-1 space-y-10 flex flex-col justify-around">
        <h1 className="text-2xl font-bold mb-2 text-customText">
          Nurturing Potential,{" "}
          <span className="text-[#FDCE64]">One Step at a Time</span>
        </h1>
        <p className="text-lg mb-4 text-customText text-justify">
          <span className="font-bold text-customText">AutiLearn</span> is a fun
          and engaging learning platform designed to help children with autism
          develop essential skills in biology. Through gamified learning paths,
          interactive quizzes, and personalized assistance, AutiLearn fosters a
          love of learning while catering to the unique learning styles of kids
          with autism.
        </p>
        <button className="btn bg-customButton text-xl text-customText border-0 px-4 py-0 w-fit  hover:bg-customButtonDarker">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
