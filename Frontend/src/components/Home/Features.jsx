/* eslint-disable react/no-unescaped-entities */
import features1 from "../../assets/features1.svg";
import features2 from "../../assets/features2.svg";
import features3 from "../../assets/features3.svg";
import features4 from "../../assets/features4.svg";

const Features = () => {
  return (
    <div className="flex flex-col items-center mt-5 p-4">
      <div className="text-customTextBlack font-bold text-2xl p-4">
        Kids with Autism
      </div>
      <div className="text-customTextBlack font-normal text-justify text-lg p-4">
        <span className="font-bold text-customTextBlack">
          Autism Spectrum Disorder (ASD)
        </span>{" "}
        is a neurodevelopmental condition that affects how individuals perceive
        and interact with the world. Children with autism often learn and
        process information differently. Recognizing these unique learning
        styles is crucial for providing appropriate support and fostering
        growth.
      </div>
      <div className="text-customTextBlack font-normal text-justify text-lg p-4">
        If you suspect your child may have autism, take an online assessment now
        and seek a professional evaluation. Early intervention can significantly
        impact their development and quality of life.{" "}
      </div>
      <button className="btn bg-customButton text-xl text-customText border-0 px-4 py-0 mt-4 hover:bg-customButtonDarker">
        Take Assessment
      </button>
      <div className="text-customTextBlack font-bold text-2xl p-4 mt-10">
        How AutiLearn works?
      </div>
      <div className="text-customTextBlack font-normal text-justify text-lg p-4">
        AutiLearn aims to make learning engaging and accessible for children
        with autism. It provides the following features:
      </div>
      <div className="p-4 m-4">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center p-4 space-y-4">
            <img
              src={features1}
              alt="Personalized Learning Paths"
              className="object-contain h-32 w-32"
            />
            <h2 className="text-lg text-customTextBlack font-bold text-center">
              Personalized Learning Paths
            </h2>
            <p className="text-lg text-customTextBlack text-justify">
              AutiLearn offers personalized learning paths designed specifically
              for children with autism. We understand that every child learns
              differently, so we have created an engaging platform that uses
              visuals and simplified language to make learning enjoyable and
              accessible.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 space-y-4">
            <img
              src={features2}
              alt="Interactive Quizzes and Challenges"
              className="object-contain h-32 w-32"
            />
            <h2 className="text-lg text-customTextBlack font-bold text-center">
              Interactive Quizzes and Challenges
            </h2>
            <p className="text-lg text-customTextBlack text-justify">
              AutiLearn transforms learning into an adventure with interactive
              quizzes and challenges. Children actively test their knowledge
              while having fun, reinforcing key concepts and building
              confidence.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 space-y-4">
            <img
              src={features3}
              alt="Supportive Assistant"
              className="object-contain h-32 w-32"
            />
            <h2 className="text-lg text-customTextBlack font-bold text-center">
              Supportive Assistant
            </h2>
            <p className="text-lg text-customTextBlack text-justify">
              Meet your child's learning companion. Our friendly AI chatbot is
              always ready to lend a hand. Ask questions, explore topics, or
              simply chat about what they're learning. Our chatbot makes
              learning an enjoyable and empowering experience.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 space-y-4">
            <img
              src={features4}
              alt="Reward System"
              className="object-contain h-32 w-32"
            />
            <h2 className="text-lg text-customTextBlack font-bold text-center">
              Reward System
            </h2>
            <p className="text-lg text-customTextBlack text-justify">
              Watch your child thrive with AutiLearn's exciting reward system!
              Earn virtual coins for completing quizzes and learning paths.
              These coins allow him to unlock engaging stories filled with
              adventure and excitement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
