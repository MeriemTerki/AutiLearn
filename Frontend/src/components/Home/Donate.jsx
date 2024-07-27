/* eslint-disable react/no-unescaped-entities */
import donate from "../../assets/donate.svg";
import donateCover from "../../assets/donateCover.svg";

const Donate = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${donateCover})` }}
    >
      <div className="p-5 space-y-4 md:space-y-6 lg:space-y-8 max-w-screen-lg mx-auto mt-4">
        <div className="text-customTextBlack font-bold text-2xl md:text-3xl lg:text-4xl text-center">
          Donate and empower a child's future
        </div>

        <div className="p-4 text-customTextBlack font-normal text-lg md:text-xl lg:text-2xl text-justify">
          Autism affects approximately 1 in 44 children in the U.S.,
          underscoring the urgent need for innovative solutions. AutiLearn is
          committed to empowering these young learners. Your support can help us
          reach more children and make a lasting impact. Donate today to help us
          expand our program and unlock the potential of every child with
          autism.
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <button className="btn bg-customButton text-xl text-customText border-0 px-4 py-2 hover:bg-customButtonDarker">
            Donate Now!
          </button>
          <img
            src={donate}
            alt="Donate Image"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Donate;
