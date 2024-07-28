import Cell from "../../assets/dashboard/cell.svg";
import Genetic from "../../assets/dashboard/genetic.svg";
import Apple from "../../assets/dashboard/apple.svg";
import Tv from "../../assets/dashboard/tv.svg";

// Courses Gradient and text color constants
const GRADIENTS = {
  Biology: "bg-gradient-to-bl from-orange-500 via-red-600 to-rose-700",
  Physics: "bg-gradient-to-bl from-lime-400 via-emerald-500 to-green-600",
};

const TEXT_COLORS = {
  Biology: "#621f1f",
  Physics: "#205a3d",
};

// Courses data
const biologyCourses = [
  {
    id: 1,
    title: "Powering the Cell",
    img: Cell,
    subject: "Biology",
  },
  {
    id: 2,
    title: "The Genetic Code",
    img: Genetic,
    subject: "Biology",
  },
  {
    id: 1,
    title: "Powering the Cell",
    img: Cell,
    subject: "Biology",
  },
  {
    id: 2,
    title: "The Genetic Code",
    img: Genetic,
    subject: "Biology",
  },
];

const physicsCourses = [
  {
    id: 3,
    title: "Newton's Laws",
    img: Apple,
    subject: "Physics",
  },
  {
    id: 4,
    title: "Simple Machines",
    img: Tv,
    subject: "Physics",
  },
  {
    id: 3,
    title: "Newton's Laws",
    img: Apple,
    subject: "Physics",
  },
  {
    id: 4,
    title: "Simple Machines",
    img: Tv,
    subject: "Physics",
  },
];

// CourseCard component
const CourseCard = ({ id, title, img, subject }) => (
  <div
    key={id}
    className={`min-w-[245px] md:w-[245px] shadow-lg rounded-[12px] mb-10 xl:mb-6 cursor-pointer py-6 px-5 xl:px-5 xl:py-6 ${GRADIENTS[subject]}`}
  >
    <div className="text-6xl flex mb-4 items-center justify-center">
      <img src={img} className="w-full" alt={`${title} course icon`} />
    </div>
    <div className="font-medium text-2xl xl:text-xl text-white">{title}</div>
    <div
      className={`font-bold text-xl xl:text-lg mb-3 ${
        subject === "Biology"
          ? `text-[${TEXT_COLORS.Biology}]`
          : `text-[${TEXT_COLORS.Physics}]`
      }`}
    >
      {subject}
    </div>
    <div className="flex items-center text-lg xl:text-base justify-between text-white/60 font-bold">
      <span>Completed:</span>
      <span>95%</span>
    </div>
  </div>
);

// My Learning component
const MyLearning = () => (
  <div className="xl:p-6 pb-2 relative text-zinc-900 px-5 md:px-12 xl:px-5">
    <div className="text-center md:text-left mb-12 max-w-[600px]">
      <h1 className="font-bold text-4xl mb-3">My Learning</h1>
      <p className="font-medium text-gray-700">
        Dive into the fascinating worlds of biology and physics! Each learning
        path has a set of interactive courses for you to explore.
      </p>
    </div>

    {/* Biology Courses section */}
    <section className="mb-12">
      <h2 className="font-bold text-center mb-8 md:text-left text-3xl xl:text-2xl xl:mb-6">
        Biology
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-8 overflow-x-auto pb-4 custom-scrollbar">
        {biologyCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>

    {/* Physics Courses section */}
    <section>
      <h2 className="font-bold text-center mb-8 md:text-left text-3xl xl:text-2xl xl:mb-6">
        Physics
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-8 overflow-x-auto pb-4 scrollbar-custom">
        {physicsCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  </div>
);

export default MyLearning;
