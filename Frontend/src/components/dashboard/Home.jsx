// Import assets
import Img1 from "../../assets/dashboard/coin.svg";
import Img2 from "../../assets/dashboard/fire.svg";
import Img3 from "../../assets/dashboard/book.svg";
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

// Performance data
const performanceData = [
  {
    id: 1,
    description:
      "You gathered 3000 virtual coins you can use to unlock stories.",
    img: Img1,
  },
  {
    id: 2,
    description: "You have been consistent for 7 days in a row.",
    img: Img2,
  },
  {
    id: 3,
    description: "You completed 75% of available learning paths.",
    img: Img3,
  },
];

// Courses data
const coursesData = [
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

// PerformanceCard component
const PerformanceCard = ({ id, description, img }) => (
  <div
    key={id}
    className="w-full mb-12 xl:w-[250px] text-center bg-white rounded-lg cursor-pointer"
  >
    <div className="relative text-6xl mb-4 h-[150px] shadow-inner xl:h-[120px] border flex items-center justify-center">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <img src={img} className="drop-shadow-md" alt="Performance icon" />
    </div>
    <p className="mb-3 w-[95%] mx-auto text-xl xl:text-base font-medium text-gray-600">
      {description}
    </p>
  </div>
);

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

// Home component
const Home = () => (
  <div className="xl:p-6 pb-2 relative text-zinc-900 px-5 md:px-12 xl:px-5">
    <div className="text-center md:text-left mb-12 max-w-[600px]">
      <h1 className="font-bold text-4xl mb-3">Welcome Back!</h1>
      <p className="font-medium text-gray-700">
        Learning is a lifelong process of keeping abreast of change. Bit by bit,
        you can get where you want to be. Take a step now!
      </p>
    </div>

    {/* My Performance section */}
    <section className="mb-6 md:mb-2">
      <h2 className="font-bold text-center mb-12 md:text-left text-3xl xl:text-2xl xl:mb-8">
        My Performance
      </h2>
      <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-12 overflow-x-auto w-full">
        {performanceData.map((performance) => (
          <PerformanceCard key={performance.id} {...performance} />
        ))}
      </div>
    </section>

    {/* My Courses section */}
    <section>
      <h2 className="font-bold text-center mb-12 md:text-left text-3xl xl:text-2xl xl:mb-8">
        My Courses
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-8 overflow-x-auto pb-4 scrollbar-custom">
        {coursesData.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  </div>
);

export default Home;
